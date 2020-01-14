<?php
include "db.php";
    if(isset($_POST['update']))
    {	
	$availability = $_POST['availability'];
	$myusername = $_POST['username'];
        
        $q=mysqli_query($con,"UPDATE contacts SET availability = '$availability' WHERE nick = '$myusername'");
        if($q)
            echo "success";
        else
            echo "error";
    }
?>
