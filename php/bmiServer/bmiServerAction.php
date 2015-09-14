<?php
require 'BMIServerService.class.php';


$weight = $_GET['weight'];
$height = $_GET['height'];


$bmi = 0.0;


if(is_numeric($weight) && is_numeric($height)){
    $bmi = BMIServerService::getBMI($weight, $height);
}
echo $bmi;
?>