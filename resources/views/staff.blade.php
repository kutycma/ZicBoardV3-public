<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{$title ?? 'Staff Panel'}}</title>
    <script type="module" crossorigin src="/assets/staffzic/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/staffzic/assets/index.css">
  
    <script>
      window.staffSettings = {
        title: @json($title ?? 'Staff Panel'),
        staff_path: @json($staff_path),
        entry: @json($entry ?? 'dashboard')
      };
    </script>
</head>
  <body>
    <div id="root"></div>
  </body>
</html>
