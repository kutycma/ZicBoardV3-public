@php($assetVersion = config('app.version'))
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>Z</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ $title ?? 'Staff Panel' }}</title>
    <script type="module" crossorigin src="/assets/staffzic/assets/index.js?ver={{$assetVersion}}"></script>
    <link rel="stylesheet" crossorigin href="/assets/staffzic/assets/index.css?ver={{$assetVersion}}">
    <script>
        window.staffSettings = {
            title: @json($title ?? 'Staff Panel'),
            staff_path: @json($staff_path ?? config('zicboard.staff_path', 'webctv')),
            entry: @json($entry ?? 'dashboard'),
            locale: @json($locale ?? 'vi-VN'),
            default_locale: @json($default_locale ?? 'vi-VN')
        }
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
