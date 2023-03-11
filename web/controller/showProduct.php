<?php
require_once("./../config/DB.php");
$connecttion = new mysqli($dbHost,$dbUser,$dbPassword,$dbName);
$qu = "select * from products where state!=2";
$result = $connecttion -> query($qu);

$products = array();
while ($row = $result -> fetch_assoc() ){
    $products[$row['id']] = array(
        'id' => $row['id'],
        'name' => $row['Pname'],
        'purchase_price' => number_format( $row['purchase_price']),
        'consumer_price' => number_format($row['consumer_price']),
        'sales_price' => number_format($row['sales_price']),
        'Stock' => number_format($row['Stock']),
        'dateInsert' => $row['dateInsert'],
        'img' => $row['img']
    );
}
$connecttion ->close();


header("Content-Type: application/json");
echo json_encode($products);