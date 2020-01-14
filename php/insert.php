<?php
include "db.php";
    if(isset($_POST['insert']))
    {
        $vars = array('phone', 'username','firstName', 'lastName', 'password', 'availability');
        $verified = TRUE;
        foreach($vars as $v) {
            if(!isset($_POST[$v]) || empty($_POST[$v])) {
                $verified = FALSE;
            }
        }
        if(!$verified) {
            echo "Some fields are empty!";
            exit();
        }
        
        $phone = $_POST['phone'];
        $nick = $_POST['username'];
        $name = $_POST['firstName'];
        $surname = $_POST['lastName'];
        $password = $_POST['password'];
        $availability = $_POST['availability'];
        
        $stmt = mysqli_prepare($con, "INSERT INTO `contacts` ( `number` , `name` , `surname`, `nick`, `password`, `availability` ) VALUES (?,?,?,?,?,?)");
        
        mysqli_stmt_bind_param($stmt, "ssssss", $phone, $name, $surname, $nick, $password, $availability);
        
        if(mysqli_stmt_execute($stmt);)
            echo "success";
        else
            echo "error";
    }
?>