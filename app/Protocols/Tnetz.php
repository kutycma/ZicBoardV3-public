<?php

namespace App\Protocols;

use App\Services\Core\CoreRpcClient;
use Illuminate\Contracts\Support\Arrayable;
use RuntimeException;

class Tnetz
{
    public $flag = 'ove';
    private $servers;
    private $user;

    public function __construct($user, $servers)
    {
        $this->user = $user;
        $this->servers = $servers;
    }

    public function handle()
    {
        return $this->renderViaCore('tnetz');
    }

    protected function renderViaCore(string $protocol): string
    {
        $result = (new CoreRpcClient())->call('subscription.render', [
            'protocol' => $protocol,
            'user' => $this->normalizeValue($this->user),
            'servers' => $this->normalizeServers($this->servers),
            'base_config_yaml' => $this->baseConfigYaml(),
            'app_name' => config('zicboard.app_name', 'ZicBoard'),
        ]);

        if (!is_array($result) || !array_key_exists('content', $result)) {
            throw new RuntimeException('Invalid core subscription.render response');
        }

        foreach (($result['headers'] ?? []) as $name => $value) {
            if (!is_string($name) || $name === '' || $value === null) {
                continue;
            }
            header($name . ': ' . (string)$value);
        }

        return (string)$result['content'];
    }

    private function baseConfigYaml(): string
    {
        $customConfig = base_path('resources/rules/custom.clash.yaml');
        $defaultConfig = base_path('resources/rules/default.clash.yaml');
        $path = is_file($customConfig) ? $customConfig : $defaultConfig;
        $content = file_get_contents($path);
        if ($content === false) {
            throw new RuntimeException('Unable to read Clash base config');
        }
        return $content;
    }

    private function normalizeServers($servers): array
    {
        $servers = $this->normalizeValue($servers);
        return is_array($servers) ? array_values($servers) : [];
    }

    private function normalizeValue($value)
    {
        if ($value instanceof Arrayable) {
            return $this->normalizeValue($value->toArray());
        }

        if ($value instanceof \JsonSerializable) {
            return $this->normalizeValue($value->jsonSerialize());
        }

        if (is_object($value)) {
            if (method_exists($value, 'toArray')) {
                return $this->normalizeValue($value->toArray());
            }
            $decoded = json_decode(json_encode($value), true);
            return is_array($decoded) ? $this->normalizeValue($decoded) : [];
        }

        if (is_array($value)) {
            $normalized = [];
            foreach ($value as $key => $child) {
                $normalized[$key] = $this->normalizeValue($child);
            }
            return $normalized;
        }

        return $value;
    }
}