<?php
    $path = "index";
    $filename = "index";
    if(array_key_exists("PATH_INFO",$_SERVER)){
        $arr = explode("/",substr($_SERVER["PATH_INFO"],1));
        if(count($arr)==2){
            $path = $arr[0];
            $filename = $arr[1];
        }else{
            $filename = $arr[0];
        }
    }
    $pathName = "/view/".$path."/".$filename.".html";
    include($pathName);
?>
