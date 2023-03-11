<?php
$id = $_GET['delid'];
require_once("./../config/DB.php");
$connecttion = new mysqli($dbHost,$dbUser,$dbPassword,$dbName);
$qu = "update products set state = 'DeActive' where id=$id";
$result = $connecttion -> query($qu);
header("Content-Type: application/json");
echo $id;

