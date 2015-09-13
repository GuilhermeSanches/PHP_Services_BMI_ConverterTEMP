<?php
class serviceTemp {
    public static function calculate($temp, $type) {
        if($type=='F')
        return $temp * 1.8 + 32;
        else if($type=='C')
            return ($temp-32)/1.8;
    }
}
?>