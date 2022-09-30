<?php
 session_start();

 if (!isset($_SESSION['username'])) {
  $_SESSION['msg'] = "You have to log in first";
  header('location: login.php');
}
if (isset($_GET['logout'])) {
  session_destroy();
  unset($_SESSION['username']);
  header("location: login.php");
}
$host="localhost";
$user="root";
$password="dilan123";
$database="Enigma";
$errors = array();

$db = mysqli_connect($host, $user, $password, $database);
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
  } 

if(isset($_POST['submit'])){
    $listWidth = $_POST["listWidth"];
    $listHeight= $_POST["listHeight"];
    $plateWidth= $_POST["plateWidth"];
    $plateHeight= $_POST["plateHeight"];
    $plateCName= $_POST["plateCName"];
    $plateCAddress= $_POST["plateCAddress"];
    $plateProduct= $_POST["plateProduct"];
    $plateModelName= $_POST["plateModelName"];
    $plateModelID= $_POST["plateModelID"];
    $plateSNIdentifier= $_POST["plateSNIdentifier"];
    $plateName= $_POST["plateName"];
    $voltage = $_POST["voltage"];
    $frequency = $_POST["frequency"];
    $wattage = $_POST["wattage"];
    $electricCurrent = $_POST["electricCurrent"];


$query = "REPLACE INTO Plates (listWidth, listHeight,  plateWidth, plateHeight, companyName,
companyAddress, product, model, idModel, serialNumberIdentifier, plateName, voltage, frequency, wattage, electricCurrent)
VALUES('$listWidth', '$listHeight', '$plateWidth', '$plateHeight', '$plateCName',
'$plateCAddress', '$plateProduct', '$plateModelName', '$plateModelID', '$plateSNIdentifier', 
'$plateName', '$voltage', '$frequency', '$wattage', '$electricCurrent')";

mysqli_query($db, $query);
echo
"
<script>
alert('sent');
</script>
";
}


/* exec("/opt/homebrew/bin/python3 /Users/dilan/Documents/Enigma/enigmaPlateGeneratorV2/script/python.py");
 */  
 

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
  <link rel="stylesheet" href="style/style.css" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900" >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,400i,700,700i" />
    
    
<script src="https://cdn.jsdelivr.net/npm/svg-to-pdfkit@0.1.8/source.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/pdfkit@0.10.0/js/pdfkit.standalone.js"></script>
  <script src="https://bundle.run/blob-stream@0.1.3"></script>
  <script src="https://cdn.jsdelivr.net/npm/svg-to-pdfkit@0.1.8/source.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <title>Enigma generator</title>

</head>

<body>
  <div id="listBack" class="listBack">    
<svg width="600mm" height="600mm"  id="list"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <svg id="prv_plate" class="plates_final" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90mm" height="54mm" >
    <rect id="svg_plateBorder" rx="10" x="0" y="0" fill="none" stroke="magenta" stroke-width="0.1mm" />
    <rect id="svg_plateInnerLine" rx="8" x="1.5mm" y="1.5mm" fill="none" stroke="black" stroke-width="0.5mm" />
    <rect id="svg_underline" x="10mm" y="10mm" width="70mm" height="0.3mm" fill="black" />
    <circle id="svg_hole_tl" class="hole" cx="5mm" cy="5mm" r="1.75mm" stroke="magenta" stroke-width="0.1mm" fill="none" />
    <circle id="svg_hole_tr" class="hole" cx="85mm" cy="5mm" r="1.75mm" stroke="magenta" stroke-width="0.1mm" fill="none" />
    <circle id="svg_hole_bl" class="hole" cx="5mm" cy="49mm" r="1.75mm" stroke="magenta" stroke-width="0.1mm" fill="none" />
    <circle id="svg_hole_br" class="hole" cx="85mm" cy="49mm" r="1.75mm" stroke="magenta" stroke-width="0.1mm" fill="none" />
   
<svg id="newSvgImgLogo"></svg>
<svg id="newSvgImgCertificat"></svg>

  <text id="svg_CompanyName" fill="black" class="Ffamily" text-anchor="middle" >ENIGMA GAMING</text>
  
    <text id="preSvg_serialNumber"  fill="black" text-anchor="end" class="preData Ffamily">Serial Number:</text>
    <text id="svg_serialNumber" fill="black" class="data serial Ffamily"></text>

    <text id="preSvg_productionDate"  fill="black" text-anchor="end" class="preData Ffamily">Production Date:</text>
    <text id="svg_productionDate"  fill="black" class="data Ffamily"></text>

    <text id="preSvg_product"  fill="black" text-anchor="end" class="preData Ffamily">Product:</text>
    <text id="svg_product"  fill="black" class="data Ffamily"></text> 

    <text id="preSvg_modelName"  fill="black" text-anchor="end" class="preData Ffamily">Model Name:</text>
    <text id="svg_modelName"  fill="black" class="data Ffamily"></text>

    <text id="preSvg_modelID"  fill="black" text-anchor="end" class="preData Ffamily">Model ID:</text>
    <text id="svg_modelID" fill="black" class="data Ffamily"></text>

    <text id="preSvg_elecRatings"  fill="black" text-anchor="end" class="preData Ffamily">Elec. ratings:</text>
    <text id="svg_elecRatings"  fill="black" class="data Ffamily"></text>
    <text id="svg_elecRatings_two"  fill="black" class="data Ffamily"></text>

    <text id="svg_companyAddress"  fill="black" text-anchor="middle" class="Ffamily" font-size="2.4mm">ENIGMA GAMING, Vrtine 4, 6276 Pobegi,
      Slovenia, Europe</text>
    </svg> 
    
</svg>    
</div>   

<div class="loginWindow">
<?php  if (isset($_SESSION['username'])) : ?>

 <p id="welcomeTxt">  Welcome             
  <strong> 
    <?php echo $_SESSION['username']; ?> 
  </strong>
</p>                   
                    
<p id="logoutTxt">
  <a href="index.php?logout='1'" style="color: red;" > Click here to Logout</a>
</p>

<?php endif ?>
</div>

<div class="sideMenu blur" id="sideMenu">

  <div class="openArrow" id="openArrow">
    <img src="img/arrow.png" alt="arrow" id="arrow">
  </div>

  <div class="previewClass" id="btnPreview">
    <img src="img/preview.png" alt="prv" id="prvImg">
    <p class="sideMenuText">Preview</p>
</div> 

<div class="previewClass" id="preOne">
  <img src="img/sketch.png" alt="prv" id="prvImg">
  <p  class="sideMenuText">Preset</p>
</div>

<form class="drpMenu" id="drpMenu" action="" class="" name="form1" method="post" autocomplete="on">
      <select onchange="GetDetail(this.value)" name="name" id="name">
  <option value="" disabled selected>Plate Name:</option>  

<?php
    $res= mysqli_query($db, "select * from Plates");
    while($row=mysqli_fetch_array($res))
    {
  ?>    
<option ><?php echo $row["plateName"]; ?></option>
      
<?php
  }
?>
 
    </select>
</form>

<div class="downloadClass" id="third" >
  <img src="img/download.png" alt="prv" id="dwnImg">
   <div id="pdfDownload" class="left dwnWrap"><b class="dwnText">PDF</b></div>
  <div id="svgDownload" class="right dwnWrap"><b class="dwnText">SVG</b></div>
  <div id="desOne" class="splitLine dwnWrap"></div>
</div>

<div class="downloadClass upload" id="four" >
  <img src="img/cloud-computing.png" alt="prv" id="dwnImg">
</div>

</div>

  <form id="ctrForm" action="" class="" name="form1" method="post" autocomplete="on" onkeydown="return event.key != 'Enter';">
    <div class="title_tab blur">
      <h1 id="title">PLATE GENERATOR</h1>
      <!-- <input type=button onclick=exportButton() value='click here'>       --></div>        
      <div class="wListSize window blur">
        <b id="textListSize">LIST SIZE:</b>
        <input type="number" id="listWidth" name="listWidth" min="80" max="1500" placeholder="Width: *" class="inputInfo numChange" value="" title="List Width" minlength="2" maxlength="4" required /><br/>
        <input type="number" id="listHeight" name="listHeight" min="50" max="1500" placeholder="Height: *" class="inputInfo numChange" value="" title="List Height" minlength="2" maxlength="4" required/>
    </div>
    <div class="wPlateSize window blur">
      <b id="textListSize">PLATE SIZE:</b>
      <input type="number" id="plateWidth" name="plateWidth" min="80" max="120" placeholder="Width: *" class="inputInfo numChange" value="" title="Plate Width" minlength="2" maxlength="4" required/><br/>
      <input type="number" id="plateHeight" name="plateHeight" min="50" max="80" placeholder="Height: *" class="inputInfo numChange" value="" title="Plate Height" minlength="2" maxlength="4" required/>
    </div>   
      <div class="wPlateInfo window_full blur">
    <b id="textListSize">PLATE INFO:</b>
    </div>
    <div class="wPlateInfo window blur">
    <input type="text" id="plateCName" name="plateCName" placeholder="Company Name:*" class="inputInfo" title="Company Name" required/>
    <input type="text" id="plateCAddress" name="plateCAddress" placeholder="Company Address:*" class="inputInfo" title="Company Address" required/>
    <input type="text" id="plateProduct" name="plateProduct" placeholder="Product:*" class="inputInfo" title="Product" required/>
    <input type="text" id="plateModelName" name="plateModelName" placeholder="Model Name (optional):" class="inputInfo" title="Model Name"/>
    <input type="text" id="plateModelID" name="plateModelID" placeholder="Model ID:*" class="inputInfo" title="Model ID" required/>
    </div>
    <div class="wPlateInfoRight window blur">
    <input type="text" id="plateSNIdentifier" name="plateSNIdentifier" placeholder="S.N Identifier:*" class="inputInfo" title="Serial Number Identifier" required/>
    <input type="number" id="plateFirstNum" min="1" placeholder="First Number:" class="inputInfo numChange" required/>
    <input type="number" id="plateLastNum" min="2" placeholder="Last Number:" class="inputInfo" required/>
    <input type="checkbox" id="plateChkMaxNum" class="numChange">
    <input type="text" id="plateProductionDate" placeholder="Production Date:*" class="inputInfo" title="Production Date" onfocus="(this.type='date')" required/>
    </div>
    <div class="wPlateInfo window blur">
    <b id="textListSize">ELECTRIC RATINGS:</b>
    <select id="plateVoltage" name="voltage" title="Voltage" class="inputInfo" required>
    <option value="" disabled selected>Voltage:</option>
    <option value="12V⎓">12V⎓</option>
    <option value="24V⎓">24V⎓</option>
    <option value="110V~">120V~</option>
    <option value="230V~">230V~</option>
    <option value="110-230V~">110-230V~</option>
      </select>
      <select  id="plateFrequency" name="frequency" title="Frequency" class="inputInfo" required >
        <option value="" disabled selected>Frequency:</option>
        <option value="50hz">50hz</option>
        <option value="60hz">60hz</option>
        <option value="50hz/60hz">50hz/60hz</option>
      </select>
      
      <input type="number" id="plateWattage" name="wattage" placeholder="Wattage (optional):" class="inputInfo" title="Wattage" /><br/>
      <input type="number" id="plateElCurrent" name="electricCurrent" placeholder="El. Current (optional):" class="inputInfo" title="Electric Current" 
      />
    </div>
    <div class="wPlateInfo window blur" id="fileWindow">
      <b id="textListSize">IMAGE:</b>  

      <input type="file" id="plateImgLogo" (change)="openFile($event)" name="plateImgLogo" placeholder="Upload Logo:" class="inputInfo fileInput" accept=".svg" required>
      <button type="button" id="plateImgLogoFake" class="inputInfoBtn btnFile" title="Logo Image">LOGO</button>
      <span id="plateImgLogoFilename"></span>

      <input type="file" id="plateImgCertificat" name="plateImgCertificat" placeholder="Upload Certificat:" class="inputInfo fileInput" accept=".svg"> 
      <button type="button" id="plateImgCertificatFake" class="inputInfoBtn btnFile" title="Certificat Image" >CERTIFICAT</button>
      <span id="plateImgCertificatFilename"></span>
    </div>
    <button type="button" id="btnClear" class="blur">Clear</button>
    <div class="endBtn blur">
    <button type="button" id="btnMoreSettings" class="inputInfoBtn">MORE</button>
    </div>
    <div class="wMoreSettings blur" id="wMoreSettings" >
      <div class="wPlateInfo window_full moreOpt">
          <select name="font" id="wPlateSlcFont" title="Font Style" class="inputInfo">
          <option value="" disabled selected>Font Style</option>
          <option value="sans-serif">sans-serif</option>
          <option value="Roboto Condensed">Roboto Condensed</option>
          <option value="Montserrat" selected>Montserrat</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Bahnschrift">Bahnschrift</option>
          <option value="Anonymous Pro">Anonymous Pro</option>

        </select>
      <input type="number" id="numHoleDiameter" placeholder="Hole Diameter (val.: 1.75)" class="inputInfo moreSettings" title="Hole Diameter" min="0" max="2.25" step="0.01" />
      <input type="number" id="numTextSpacing" placeholder="Text Spacing (val.: 11)" class="inputInfo moreSettings" title="Text Spacing" min="0" step="0.1" maxlength="3" />
      <input type="number" id="numLaserLines" placeholder="Laser Lines Width (val.: 0.5)" class="inputInfo moreSettings" title="Laser Lines Width" min="0" max="3" step="0.01" />
      <input type="number" id="numBorderRadiusInner" placeholder="Border Radius Inner (val.: 8)" class="inputInfo moreSettings" title="Border Radius Inner" min="0" step="1" maxlength="3" />
      <input type="number" id="numBorderRadiusOutter" placeholder="Border Radius Outter(val.: 10)" class="inputInfo moreSettings" title="Border Radius Outter" min="0" step="1" maxlength="3" />
      <input type="number" id="numTextSize" placeholder="Text Size(val.: 30)" class="inputInfo moreSettings" title="Text Size" min="0" step="1" maxlength="3" />
      </div>
    </div>
     <div id="uploadWindow">
      <img src="img/reject.png" alt="exit" id="exitUpload">
            <input type="text" name="plateName" id="plateName" placeholder="Plate Name" required >   <br/>
            <input type="submit" value="submit" name="submit" id="submit">  
</div>

</form>
<script>
  function exportButton(){
    $.ajax({ url: 'index.php',
         data: {action: 'test'},
         type: 'post',
         success: function(output) {
          exec("/opt/homebrew/bin/python3 /Users/dilan/Documents/Enigma/enigmaPlateGeneratorV2/script/python.py");
          }
})
  };
</script>

<script src="script/script.js"></script>



</body>

</html>