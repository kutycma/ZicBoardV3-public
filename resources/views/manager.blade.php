<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Manager Panel' }}</title>
    <script>
        window.managerSettings = @json([
            'title' => $title ?? 'Manager Panel',
            'manager_path' => $manager_path ?? 'manager',
            'entry' => $entry ?? 'dashboard',
            'locale' => $locale ?? 'vi'
        ]);
    </script>
    <script type="module" crossorigin src="/assets/managerzic/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/managerzic/assets/index.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>