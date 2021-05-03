<?php
	
	if(isset($_POST["id"]) and isset($_POST["pass"]))
	{
	
		$_SESSION["id"] = $_POST["id"];
		$_SESSION["pass"] = $_POST["pass"] ;
	
	}
	else
	{
		return false;
	}

	echo "affiche moi ....... ($id)";
	echo "affiche moi ....... ($pass)";
	
	include("./structurePage/hautHTML.php");
	include("./structurePage/basHTML.php");
	








?>
   