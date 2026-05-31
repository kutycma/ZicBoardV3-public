<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <script>window.settings = {
            title: '{{$title}}',
            theme: '{{$theme}}',
            assets_path: '/theme/{{$theme}}',
            version: '{{$version}}',
            background_url: '{{ isset($theme_config["background_url"]) ? $theme_config["background_url"] : "" }}',
            description: '{{$description}}',
            i18n: [
                'zh-CN',
                'en-US',
                'ja-JP',
                'vi-VN',
                'ko-KR',
                'zh-TW',
                'fa-IR'
            ],
            logo: @json($logo ?: "/theme/" . $theme . "/images/logo.png")
        };
        window.EZ_THEME_CONFIG = @json($theme_config ?? []);
        window.getEzThemeAsset = function (path) {
            var normalizedPath = String(path || '').charAt(0) === '/' ? String(path || '') : '/' + String(path || '');
            var assetsPath = (window.settings && window.settings.assets_path) || '/theme/{{$theme}}';
            return String(assetsPath).replace(/\/+$/, '') + normalizedPath;
        };
        window.getEzLogoUrl = function () {
            var logo = window.settings && window.settings.logo;
            if (logo && logo !== '/images/logo.png' && logo !== './images/logo.png') {
                return logo;
            }
            return window.getEzThemeAsset('/images/logo.png');
        };
        window.VUE_APP_DEBUGGING = "false";
        </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="/theme/{{$theme}}/images/logo.png">
    <title>%VUE_APP_TITLE%</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        @media (min-width: 769px) {
            html, body, div, main, section, article, aside, nav {
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
            }

            ::-webkit-scrollbar, ::-webkit-scrollbar-button, ::-webkit-scrollbar-track, ::-webkit-scrollbar-track-piece, ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-corner, ::-webkit-resizer {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                background: transparent !important;
            }
        }

        html, body {
            width: 100%;
            height: 100%;
        }

        @media (min-width: 769px) {
            * {
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
            }
        }

        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
        }

        #app {
            width: 100%;
            height: 100%;
        }

        html.preloader-active, body.preloader-active {
            overflow: hidden !important;
        }
    </style>
    <style>
        .app-version {
            position: fixed;
            left: 6px;
            bottom: 4px;
            font-size: 9px;
            color: rgba(0, 0, 0, 0.35);
            user-select: none;
            pointer-events: none;
            z-index: 5;
        }
    </style>
  <script type="module" crossorigin src="/theme/{{$theme}}/static/index-DAtn_kkx.js"></script>
</head>
<body>
<div id="app"></div>
<div class="app-version">v0.4.0</div>
</body>
</html>
