<?php
include "db.php";
    if(isset($_POST['update']))
    {	
	$password1 = $_POST['password1'];
        $password2 = $_POST['password2'];
	$myusername = $_POST['myusername'];
        
        $q=mysqli_query($con,"UPDATE contacts SET password = '$password1' WHERE nick = '$myusername'");
		
        if($q)
            echo "success";
        else
            echo "error";
    }
?>
