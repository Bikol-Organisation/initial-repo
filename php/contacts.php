<?php
	include "db.php";
	$data = array();
	date_default_timezone_set("Europe/Warsaw");
	
	$query = mysqli_query($con, "SELECT number, name, surname, availability FROM contacts ORDER BY name ASC");
		while($row = mysqli_fetch_object($query)){
			$availability = $row->availability;
			$date = date('H:i');
			$time = explode(" ",$availability);
			if($time[0] < $time[2])
			{
				if($time[0] < $date && $date < $time[2])
				{
					$availability_ = true;
				}
				else
				{
					$availability_ = false;
				}
			}
			else if($time[0] > $time[2])
			{
				if($time[0] > $date && $date > $time[2])
				{
					$availability_ = false;
				}
				else
				{
					$availability_ = true;
				}
			}
			else
			{
				$availability_ = true;
			}
			$row->availability = $availability_;
			$data[] = $row;
		}
		echo json_encode($data);
?>