<?php

$host     = 'localhost';
$db       = 'hoge';
$user     = 'root';
$password = 'root';
$dsn      = 'mysql:host='.$host.';dbname='.$db.';';

try {
   $dbh = new PDO($dsn, $user, $password);
   echo "接続成功\n";
} catch (PDOException $e) {
   echo "接続失敗: " . $e->getMessage() . "\n";
   exit();
}
?>