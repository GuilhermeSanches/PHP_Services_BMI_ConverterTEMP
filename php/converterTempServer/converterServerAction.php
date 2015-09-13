<?php
require 'serviceTemp.class.php';

$temp = $_GET['temp'];
$type = $_GET['type'];
$tempResult = 0.0;

if(is_numeric($temp)) {
    $tempResult = serviceTemp::calculate($temp, $type);
}


echo $tempResult;
?>