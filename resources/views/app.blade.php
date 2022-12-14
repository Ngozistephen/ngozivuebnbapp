<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vuebnb (Learning)</title>
  <link rel="stylesheet" href="node_modules/open-sans-all/css/open-sans.css">
  <link rel="stylesheet" href="{{asset('css/style.css', true)}}" type="text/css">
  <link rel="stylesheet" href="{{asset('css/vue-style.css', true)}}" type="text/css">
  
  <script type="text/javascript">
    window.vuebnb_server_data = "{!!addslashes(json_encode($data)) !!}" 
    window.csrf_token = "{{ csrf_token() }}"
  </script>

</head>
<body>   
<div id="app"></div> 

<script type="text/javascript" src="{{ asset('js/app.js', true)}}"></script>
</body>
</html>


  