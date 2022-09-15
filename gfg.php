<?php

// Get the user id
$name = $_REQUEST['name'];

// Database connection
$con = mysqli_connect("localhost", "root", "dilan123", "Enigma");

if ($name !== "") {
	
	// Get corresponding first name and
	// last name for that user id	
	$query = mysqli_query($con, "SELECT listWidth ,
	listHeight, plateWidth, plateHeight ,  companyName , companyAddress , product , model ,
    idModel ,  serialNumberIdentifier ,  svgLogo ,svgCertificat
     FROM Plates WHERE name='$name'");

	$row = mysqli_fetch_array($query);

	// Get the first name
	$listWidth = $row["listWidth"];
    $listHeight = $row["listHeight"];
	$plateWidth = $row["plateWidth"];
	$plateHeight = $row["plateHeight"];
	$companyName = $row["companyName"];
	$companyAddress = $row["companyAddress"];
	$product = $row["product"];
	$model = $row["model"];
	$idModel = $row["idModel"];
	$serialNumberIdentifier = $row["serialNumberIdentifier"];
	$svgLogo = $row["svgLogo"];
	$svgCertificat = $row["svgCertificat"];
	
}

// Store it in a array
$result = array("$listWidth", "$listHeight", "$plateWidth", "$plateHeight", "$companyName", "$companyAddress", "$product", 
"$model", "$idModel", "$serialNumberIdentifier", "$svgLogo", "$svgCertificat");

// Send in JSON encoded form
$myJSON = json_encode($result);
echo $myJSON;
?>
