<?php

require 'pdo_connect.php';

$sql = 'SELECT * FROM hogehoge';
$prepare = $dbh->prepare($sql);
$prepare->execute();
$result = $prepare->fetchAll(PDO::FETCH_ASSOC);

// echo var_dump($result);
$options = 'JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK  | JSON_PRETTY_PRINT | JSON_FORCE_OBJECT';
$arr = json_encode($result ,$options );

file_put_contents("test.json" , mb_convert_encoding($arr, 'utf-8'));
?>