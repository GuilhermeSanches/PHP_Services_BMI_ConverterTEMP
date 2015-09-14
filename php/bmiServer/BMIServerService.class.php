<?php
class BMIServerService {
    
    public static function getBMI($weight, $height){
        
        return $weight / ($height * $height);
        
    }
}
?>