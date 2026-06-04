<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>Z</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{$title}}</title>
    <script type="module" crossorigin src="/assets/adminzic/assets/index.js?ver={{$version}}"></script>
    <link rel="stylesheet" crossorigin href="/assets/adminzic/assets/index.css?ver={{$version}}">

    <script>
        window.settings = {
            title: '{{$title}}',
            theme: {
                sidebar: '{{$theme_sidebar}}',
                header: '{{$theme_header}}',
                color: '{{$theme_color}}',
            },
            version: '{{$version}}',
            background_url: '{{$background_url}}',
            logo: '{{$logo}}',
            secure_path: '{{$secure_path}}'
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

    <div class="app-version">ZicBoard V{{$version}}</div>
</body>
</html>
