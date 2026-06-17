<?php

namespace App\Protocols\Support;

class ClashProxyGroupNormalizer
{
    private const BUILT_IN_TARGETS = [
        'DIRECT',
        'REJECT',
        'REJECT-DROP',
        'REJECT-TINYGIF',
        'PASS',
        'GLOBAL',
        'COMPATIBLE',
    ];

    public static function normalize(array &$config, array $generatedProxyNames): void
    {
        if (!isset($config['proxies']) || !is_array($config['proxies'])) {
            $config['proxies'] = [];
        }

        if (!isset($config['proxy-groups']) || !is_array($config['proxy-groups'])) {
            $config['proxy-groups'] = [];
        }

        $primaryGroupName = self::primaryGroupName($config['proxy-groups'], $config['rules'] ?? []);
        $originalGroupNames = self::groupNames($config['proxy-groups']);
        $generatedProxyNames = self::uniqueStrings($generatedProxyNames);

        self::expandProxyGroups($config['proxy-groups'], $generatedProxyNames);

        $proxyNames = self::proxyNames($config['proxies']);
        $config['proxy-groups'] = self::dropDanglingGroups($config['proxy-groups'], $proxyNames);
        self::ensurePrimaryGroup($config['proxy-groups'], $primaryGroupName, $proxyNames);

        $finalGroupNames = self::groupNames($config['proxy-groups']);
        $finalTargets = array_merge($proxyNames, self::BUILT_IN_TARGETS, $finalGroupNames);
        $droppedTargets = array_values(array_diff($originalGroupNames, $finalGroupNames));
        self::guardRules($config, $primaryGroupName, $finalTargets, $droppedTargets);
    }

    private static function expandProxyGroups(array &$groups, array $generatedProxyNames): void
    {
        foreach ($groups as $index => $group) {
            if (!is_array($group)) {
                $group = [];
            }

            $sources = isset($group['proxies']) && is_array($group['proxies']) ? $group['proxies'] : [];
            $hasFilter = false;
            $expanded = [];

            foreach ($sources as $source) {
                if (self::isRegex($source)) {
                    $hasFilter = true;
                    foreach ($generatedProxyNames as $proxyName) {
                        if (self::isMatch($source, $proxyName)) {
                            $expanded[] = $proxyName;
                        }
                    }
                    continue;
                }

                $expanded[] = $source;
            }

            if (!$hasFilter) {
                $expanded = array_merge($expanded, $generatedProxyNames);
            }

            $group['proxies'] = self::uniqueStrings($expanded);
            $groups[$index] = $group;
        }
    }

    private static function primaryGroupName(array $groups, array $rules): string
    {
        foreach ($groups as $group) {
            if (is_array($group) && isset($group['name']) && trim((string)$group['name']) === '$app_name') {
                return '$app_name';
            }
        }

        if (self::rulesReferenceTarget($rules, '$app_name')) {
            return '$app_name';
        }

        foreach ($groups as $group) {
            if (is_array($group) && isset($group['name']) && trim((string)$group['name']) !== '') {
                return (string)$group['name'];
            }
        }

        return '$app_name';
    }

    private static function rulesReferenceTarget(array $rules, string $target): bool
    {
        foreach ($rules as $rule) {
            if (!is_string($rule) || strpos($rule, '(') !== false || strpos($rule, ')') !== false) {
                continue;
            }

            $parts = array_map('trim', explode(',', $rule));
            $targetIndex = self::policyTargetIndex($parts);
            if ($targetIndex !== null && isset($parts[$targetIndex]) && $parts[$targetIndex] === $target) {
                return true;
            }
        }

        return false;
    }

    private static function dropDanglingGroups(array $groups, array $proxyNames): array
    {
        $groups = self::namedGroups($groups);
        $proxyTargets = array_flip($proxyNames);
        $builtInTargets = array_flip(self::BUILT_IN_TARGETS);
        $resolvableGroups = [];

        do {
            $changed = false;

            foreach ($groups as $group) {
                $groupName = (string)$group['name'];
                if (isset($resolvableGroups[$groupName])) {
                    continue;
                }

                if (self::groupUsesProvider($group) || self::hasResolvableTarget($group, $proxyTargets, $builtInTargets, $resolvableGroups)) {
                    $resolvableGroups[$groupName] = true;
                    $changed = true;
                }
            }
        } while ($changed);

        $nextGroups = [];
        foreach ($groups as $group) {
            $groupName = (string)$group['name'];
            if (!isset($resolvableGroups[$groupName])) {
                continue;
            }

            $targets = isset($group['proxies']) && is_array($group['proxies']) ? $group['proxies'] : [];
            $targets = array_values(array_filter(self::uniqueStrings($targets), function ($target) use ($proxyTargets, $builtInTargets, $resolvableGroups, $groupName) {
                if ($target === $groupName) {
                    return false;
                }

                return isset($proxyTargets[$target]) || isset($builtInTargets[$target]) || isset($resolvableGroups[$target]);
            }));

            if (!$targets && !self::groupUsesProvider($group)) {
                continue;
            }

            $group['proxies'] = $targets;
            $nextGroups[] = $group;
        }

        return array_values($nextGroups);
    }

    private static function ensurePrimaryGroup(array &$groups, string $primaryGroupName, array $proxyNames): void
    {
        if (!$proxyNames) {
            self::upsertPrimaryGroup($groups, $primaryGroupName, ['DIRECT']);
            return;
        }

        foreach ($groups as $group) {
            if (isset($group['name']) && (string)$group['name'] === $primaryGroupName) {
                return;
            }
        }

        $targets = self::groupNames($groups);
        if (!$targets) {
            $targets = $proxyNames;
        }
        if (!$targets) {
            $targets = ['DIRECT'];
        }

        self::upsertPrimaryGroup($groups, $primaryGroupName, $targets);
    }

    private static function upsertPrimaryGroup(array &$groups, string $primaryGroupName, array $targets): void
    {
        $primaryGroup = [
            'name' => $primaryGroupName,
            'type' => 'select',
            'proxies' => self::uniqueStrings($targets),
        ];

        foreach ($groups as $index => $group) {
            if (isset($group['name']) && (string)$group['name'] === $primaryGroupName) {
                $groups[$index] = $primaryGroup;
                return;
            }
        }

        array_unshift($groups, $primaryGroup);
    }

    private static function guardRules(array &$config, string $primaryGroupName, array $validTargets, array $droppedTargets): void
    {
        if (!isset($config['rules']) || !is_array($config['rules']) || !$droppedTargets) {
            return;
        }

        $validTargetLookup = array_flip(self::uniqueStrings($validTargets));
        $droppedTargetLookup = array_flip(self::uniqueStrings($droppedTargets));
        $replacementTarget = isset($validTargetLookup[$primaryGroupName]) ? $primaryGroupName : 'DIRECT';

        foreach ($config['rules'] as $index => $rule) {
            if (!is_string($rule)) {
                continue;
            }

            $config['rules'][$index] = self::guardRuleString($rule, $droppedTargetLookup, $replacementTarget);
        }
    }

    private static function guardRuleString(string $rule, array $droppedTargetLookup, string $replacementTarget): string
    {
        if (strpos($rule, '(') !== false || strpos($rule, ')') !== false) {
            return $rule;
        }

        $parts = array_map('trim', explode(',', $rule));
        $targetIndex = self::policyTargetIndex($parts);
        if ($targetIndex === null || !isset($parts[$targetIndex])) {
            return $rule;
        }

        if (!isset($droppedTargetLookup[$parts[$targetIndex]])) {
            return $rule;
        }

        $parts[$targetIndex] = $replacementTarget;
        return implode(',', $parts);
    }

    private static function policyTargetIndex(array $parts): ?int
    {
        if (count($parts) < 2) {
            return null;
        }

        $type = strtoupper((string)$parts[0]);
        if (in_array($type, ['AND', 'OR', 'NOT'], true)) {
            return null;
        }

        if (in_array($type, ['MATCH', 'FINAL'], true)) {
            return 1;
        }

        if (count($parts) >= 3) {
            return 2;
        }

        return null;
    }

    private static function hasResolvableTarget(array $group, array $proxyTargets, array $builtInTargets, array $resolvableGroups): bool
    {
        $targets = isset($group['proxies']) && is_array($group['proxies']) ? $group['proxies'] : [];
        foreach (self::uniqueStrings($targets) as $target) {
            if (isset($proxyTargets[$target]) || isset($builtInTargets[$target]) || isset($resolvableGroups[$target])) {
                return true;
            }
        }

        return false;
    }

    private static function groupUsesProvider(array $group): bool
    {
        return isset($group['use']) && is_array($group['use']) && self::uniqueStrings($group['use']);
    }

    private static function namedGroups(array $groups): array
    {
        $seen = [];
        $namedGroups = [];

        foreach ($groups as $group) {
            if (!is_array($group) || !isset($group['name'])) {
                continue;
            }

            $name = trim((string)$group['name']);
            if ($name === '' || isset($seen[$name])) {
                continue;
            }

            $seen[$name] = true;
            $group['name'] = $name;
            $namedGroups[] = $group;
        }

        return $namedGroups;
    }

    private static function proxyNames(array $proxies): array
    {
        $names = [];
        foreach ($proxies as $proxy) {
            if (is_array($proxy) && isset($proxy['name'])) {
                $names[] = $proxy['name'];
            }
        }

        return self::uniqueStrings($names);
    }

    private static function groupNames(array $groups): array
    {
        $names = [];
        foreach ($groups as $group) {
            if (is_array($group) && isset($group['name'])) {
                $names[] = $group['name'];
            }
        }

        return self::uniqueStrings($names);
    }

    private static function uniqueStrings(array $values): array
    {
        $seen = [];
        $result = [];

        foreach ($values as $value) {
            if (is_array($value) || is_object($value)) {
                continue;
            }

            $value = trim((string)$value);
            if ($value === '' || isset($seen[$value])) {
                continue;
            }

            $seen[$value] = true;
            $result[] = $value;
        }

        return $result;
    }

    private static function isRegex($value): bool
    {
        if (is_array($value) || is_object($value)) {
            return false;
        }

        return @preg_match((string)$value, '') !== false;
    }

    private static function isMatch($pattern, string $value): bool
    {
        return @preg_match((string)$pattern, $value) === 1;
    }
}