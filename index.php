<?php
// データベースに接続
$pdo = new PDO(
   // ホスト名、データベース名
   'mysql:host=localhost;dbname=hoge;',
   // ユーザー名
   'root',
    // パスワード
   'root',
    // レコード列名をキーとして取得させる
   [ PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC ]
);

// SQL文をセット
$stmt = $pdo->prepare('SELECT * FROM hogehoge');

// SQL文を実行
$stmt->execute();

// ループして1レコードずつ取得
foreach ($stmt as $row) {
   echo var_dump($row);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>hoge</title>
</head>
<body>
   test
</body>
</html>
