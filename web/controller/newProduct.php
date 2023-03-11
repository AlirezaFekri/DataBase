 <?php
$pname = $_GET['name'];
$barcode = $_GET['barcode'];
$buy_price = $_GET['buy_price'];
$consumer = $_GET['consumer'];
$sell = $_GET['sell'];
$count = $_GET['count'];
$seller = $_GET['seller'];
$date = $_GET['date'];
$img = $_GET['img'];
$state = $_GET['state'];
var_dump($pname);
require_once("./../config/DB.php");

$connecttion = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);
$connecttion->set_charset("utf8");
$qu = "INSERT INTO products(Pname,barcode,purchase_price,consumer_price,sales_price,Stock,dateInsert,seller,img) values('$pname',$barcode,$buy_price,$consumer,$sell,$count,$date,$seller,'$img')";
$result = $connecttion->query($qu);
$connecttion->close();
header("location:./../view/showProducts.html");