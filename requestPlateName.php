<?php
 session_start();

$name = $_REQUEST['plateName'];
$con = mysqli_connect("localhost", "root", "dilan123", "Enigma");

if ($name !== "") {
	
	$query = mysqli_query($con, "SELECT listWidth ,
	listHeight, plateWidth, plateHeight ,  companyName , companyAddress , product , model ,
    idModel ,  serialNumberIdentifier, plateName, voltage, frequency, wattage, electricCurrent, logoRemark, certificatRemark
     FROM Plates WHERE plateName='$name'");

	$row = mysqli_fetch_array($query);

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
	$plateName = $row["plateName"];
	$voltage = $row["voltage"];
	$frequency = $row["frequency"];
	$wattage = $row["wattage"];
	$electricCurrent = $row["electricCurrent"];
	$logoRemark = $row["logoRemark"];
    $certificatRemark = $row["certificatRemark"];
}

$result = array("$listWidth", "$listHeight", "$plateWidth", "$plateHeight", "$companyName", "$companyAddress", "$product", 
"$model", "$idModel", "$serialNumberIdentifier", "$plateName", "$voltage", "$frequency", "$wattage", "$electricCurrent", "$logoRemark", "$certificatRemark");

$myJSON = json_encode($result);
echo $myJSON;
?>
