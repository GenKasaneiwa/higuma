<?php
function get_request() {
   $content_type = explode(';', trim(strtolower($_SERVER['CONTENT_TYPE'])));
   $media_type = $content_type[0];

   if($_SERVER['REQUEST_METHOD'] == 'POST' && $media_type == 'application/json') {
       // application/json で送信されてきた場合の処理
      $request = json_decode(file_get_contents('php://input'), true);
   } else {
       // application/x-www-form-urlencoded で送信されてきた場合の処理
       // REQUESTのjsonが多層の時はうまく行かない
      $request = $_REQUEST;

       // REQUESTのjsonが多層の場合に対応
      foreach ($_REQUEST as $key => $value) {
         $request[$key] = json_decode($value, true);

         // json_decodeはクォートされていない文字列がnullになるので戻す
         if ($request[$key] == null) {
            $request[$key] = $value;
         }
      }
   }

   return $request;
}
