<?php
require 'connection.php';

if(isset($_POST["submit"])){
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
    $plateImgLogo= $_POST["plateImgLogo"];
    $plateImgCertificat= $_POST["plateImgCertificat"];


$query = "INSERT INTO Plates (listWidth, listHeight,  plateWidth, plateHeight, companyName,
companyAddress, product, model, idModel, serialNumberIdentifier, svgLogo, svgCertificat)
VALUES('$listWidth', '$listHeight', '$plateWidth', '$plateHeight', '$plateCName',
'$plateCAddress', '$plateProduct', '$plateModelName', '$plateModelID', '$plateSNIdentifier', 
'$plateImgLogo', '$plateImgCertificat')";

mysqli_query($conn, $query);
echo
"
<script>
alert('sent');
</script>
";

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Data</title>
</head>
<body>
    <form id="ctrForm" action="" class=""method="post" autocomplete="off">
    <div class="title_tab">
      <h1 id="title">PLATE GENERATOR</h1>
      </div>        
      <div class="wListSize window">
        <b id="textListSize">LIST SIZE:</b>
        <input type="number" id="listWidth" name="listWidth" min="80" max="1500" placeholder="Width: *" class="inputInfo numChange" value="" title="List Width" minlength="2" maxlength="4" /><br/>
        <input type="number" id="listHeight" name="listHeight" min="50" max="1500" placeholder="Height: *" class="inputInfo numChange" value="" title="List Height" minlength="2" maxlength="4" />
    </div>
    <div class="wPlateSize window">
      <b id="textListSize">PLATE SIZE:</b>
      <input type="number" id="plateWidth" name="plateWidth" min="80" max="120" placeholder="Width: *" class="inputInfo numChange" value="" title="Plate Width" minlength="2" maxlength="4" /><br/>
      <input type="number" id="plateHeight" name="plateHeight" min="50" max="80" placeholder="Height: *" class="inputInfo numChange" value="" title="Plate Height" minlength="2" maxlength="4" />
    </div>   
      <div class="wPlateInfo window_full">
    <b id="textListSize">PLATE INFO:</b>
    </div>
    <div class="wPlateInfo window">
    <input type="text" id="plateCName" name="plateCName" placeholder="Company Name:*" class="inputInfo" title="Company Name"/>
    <input type="text" id="plateCAddress" name="plateCAddress" placeholder="Company Address:*" class="inputInfo" title="Company Address"/>
    <input type="text" id="plateProduct" name="plateProduct" placeholder="Product:*" class="inputInfo" title="Product"/>
    <input type="text" id="plateModelName" name="plateModelName" placeholder="Model Name (optional):" class="inputInfo" title="Model Name"/>
    <input type="text" id="plateModelID" name="plateModelID" placeholder="Model ID:*" class="inputInfo" title="Model ID"/>
    </div>
    <div class="wPlateInfoRight window">
    <input type="text" id="plateSNIdentifier" name="plateSNIdentifier" placeholder="S.N Identifier:*" class="inputInfo" title="Serial Number Identifier"/>
    <input type="number" id="plateFirstNum" min="1" placeholder="First Number:" class="inputInfo"/>
    <input type="number" id="plateLastNum" min="2" placeholder="Last Number:" class="inputInfo"/>
    <input type="checkbox" id="plateChkMaxNum" class="numChange">
    <input type="text" id="plateProductionDate" placeholder="Production Date:*" class="inputInfo" title="Production Date" onfocus="(this.type='date')"/>
    </div>
    <div class="wPlateInfo window">
    <b id="textListSize">ELECTRIC RATINGS:</b>
    <select name="font" id="plateVoltage" title="Voltage" class="inputInfo">
    <option value="" disabled selected>Voltage:</option>
    <option value="12V">12V</option>
    <option value="24V">24V</option>
    <option value="120V">120V</option>
    <option value="230V">230V</option>
    <option value="120V/230V">120V/230V</option>
      </select>
      <select name="font" id="plateFrequency" title="Frequency" class="inputInfo">
        <option value="" disabled selected>Frequency:</option>
        <option value="50hz">50hz</option>
        <option value="60hz">60hz</option>
        <option value="50hz/60hz">50hz/60hz</option>
      </select>
      
      <input type="number" id="plateWattage" placeholder="Wattage (optional):" class="inputInfo" title="Wattage"/><br/>
      <input type="number" id="plateElCurrent" placeholder="El. Current (optional):" class="inputInfo" title="Electric Current"/>
    </div>
    <div class="wPlateInfo window" id="fileWindow">
      <b id="textListSize">IMAGE:</b>  

      <input type="file" id="plateImgLogo" name="plateImgLogo" placeholder="Upload Logo:" class="inputInfo fileInput" accept="image/svg, image/png"/>
      <button type="button" id="plateImgLogoFake" class="inputInfoBtn btnFile" title="Logo Image">LOGO</button>
      <span id="plateImgLogoFilename"></span>

      <input type="file" id="plateImgCertificat" name="plateImgCertificat" placeholder="Upload Certificat:" class="inputInfo fileInput" accept="image/svg, image/png"/> 
      <button type="button" id="plateImgCertificatFake" class="inputInfoBtn btnFile" title="Certificat Image" >CERTIFICAT</button>
      <span id="plateImgCertificatFilename"></span>
    </div>
    <button type="button" id="btnClear">Clear</button>
    <div class="endBtn">
    <button type="button" id="btnMoreSettings" class="inputInfoBtn">MORE</button>
    </div>
    <div class="wMoreSettings" id="wMoreSettings" >
      <div class="wPlateInfo window_full moreOpt">
          <select name="font" id="wPlateSlcFont" title="Font Style" class="inputInfo">
          <option value="" disabled selected>Font Style</option>
          <option value="Arial">Arial</option>
          <option value="Montserrat" selected>Montserrat</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Bahnschrift">Bahnschrift</option>
        </select>
      <input type="number" id="numHoleDiameter" placeholder="Hole Diameter (val.: 1.75)" class="inputInfo moreSettings" title="Hole Diameter" min="0" max="2.25" step="0.01" />
      <input type="number" id="numTextSpacing" placeholder="Text Spacing (val.: 9)" class="inputInfo moreSettings" title="Text Spacing" min="0" step="0.1" maxlength="3" />
      <input type="number" id="numLaserLines" placeholder="Laser Lines Width (val.: 0.5)" class="inputInfo moreSettings" title="Laser Lines Width" min="0" max="3" step="0.01" />
      <input type="number" id="numBorderRadiusInner" placeholder="Border Radius Inner (val.: 8)" class="inputInfo moreSettings" title="Border Radius Inner" min="0" step="1" maxlength="3" />
      <input type="number" id="numBorderRadiusOutter" placeholder="Border Radius Outter(val.: 10)" class="inputInfo moreSettings" title="Border Radius Outter" min="0" step="1" maxlength="3" />
      <input type="number" id="numTextSize" placeholder="Text Size(val.: 30)" class="inputInfo moreSettings" title="Text Size" min="0" step="1" maxlength="3" />
      </div>
    </div>
    <input type="submit" value="submit" name="submit">
</form>

  <script src="script/script.js"></script>
    
</body>
</html>