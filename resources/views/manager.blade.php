<!DOCTYPE html>
<html lang="vi-VN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{$title ?? 'Manager Panel'}}</title>
    <script>
        window.managerSettings = {
            title: @json($title ?? 'Manager Panel'),
            manager_path: @json($manager_path ?? 'manager'),
            entry: @json($entry ?? 'dashboard'),
            locale: @json($locale ?? 'vi-VN'),
            default_locale: 'vi-VN'
        };
    </script>
    <script type="module" crossorigin src="/assets/managerzic/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/managerzic/assets/index.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>