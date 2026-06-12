@php($assetVersion = config('app.version'))
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>Z</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ $title ?? config('zicboard.app_name', 'ZicBoard') }}</title>
    <script type="module" crossorigin src="/assets/adminzic/assets/index.js?ver={{$assetVersion}}"></script>
    <link rel="stylesheet" crossorigin href="/assets/adminzic/assets/index.css?ver={{$assetVersion}}">
    <script>
        window.settings = {
            title: @json($title ?? config('zicboard.app_name', 'ZicBoard')),
            theme: {
                sidebar: @json($theme_sidebar ?? 'light'),
                header: @json($theme_header ?? 'dark'),
                color: @json($theme_color ?? 'default'),
            },
            version: @json($assetVersion),
            background_url: @json($background_url ?? null),
            logo: @json($logo ?? null),
            secure_path: @json($secure_path ?? config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key')))))
        }
    </script>
    <style>
        .app-version {
            position: fixed;
            right: 8px;
            bottom: 6px;
            font-size: 10px;
            color: rgba(0, 0, 0, 0.35);
            user-select: none;
            pointer-events: none;
            z-index: 5;
        }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div class="app-version">ZicBoard V{{$assetVersion}}</div>
  </body>
</html>
