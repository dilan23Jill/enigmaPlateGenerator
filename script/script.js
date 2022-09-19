

// prevent sending data on refresh
if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }


//INPUT SETTINGS

// more/less settings button
let isSet = false
var objDiv = document.getElementById("ctrForm")

document.getElementById('btnMoreSettings').onclick = function () {
  if (!isSet) {
    this.innerHTML = "LESS"
    document.getElementById('wMoreSettings').style.display = 'block'
    objDiv.scrollTop = objDiv.scrollHeight
    isSet = true
  } else {
    objDiv.scrollTop = 0
    isSet = false
    this.innerHTML = "MORE"
    setTimeout(() => {
      document.getElementById('wMoreSettings').style.display = 'none'
    }, "500")
  }
};

// input type file modifying
document.getElementById('plateImgLogoFake').onclick = function () {
  document.getElementById('plateImgLogo').click()
};

document.getElementById('plateImgLogo').addEventListener('change', function () {
  document.getElementById('plateImgLogoFake').innerHTML = this.files.item(0).name
});

document.getElementById('plateImgCertificatFake').onclick = function () {
  document.getElementById('plateImgCertificat').click()
};

document.getElementById('plateImgCertificat').addEventListener('change', function () {
  document.getElementById('plateImgCertificatFake').innerHTML = this.files.item(0).name
});

//preset window modifying
var presetElements = document.getElementsByClassName('preset')
for (let p = 0; p < presetElements.length; p++) {
  presetElements[p].addEventListener('click', function () {
    for (let p = 0; p < presetElements.length; p++) {
      presetElements[p].classList.remove('extand')
    }
    this.classList.toggle('extand')
  });
};

//design window modifying
let isDesShown = true
var dwnClass = document.getElementsByClassName("downloadClass")
var inputs = document.getElementsByClassName('inputInfo')
var numAlert;
document.getElementById('btnPreview').onclick = function () {
  numAlert=0
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      if (i == 7 || i == 15 || i == 16 || i == 18 || i > 19) {
      } else {
        numAlert++
        for(let i = 0; i < dwnClass.length; i++){
          dwnClass[i].style.visibility = "hidden"
      }
      document.getElementById('dwnImg').style.visibility = "hidden"
      }
    }
  }
if(numAlert==0) {
  for(let i = 0; i < dwnClass.length; i++){
    dwnClass[i].style.visibility = "visible"
}
document.getElementById('dwnImg').style.visibility = "visible"
outputData()
}else alert("Fill all the neccesary fields")
};

var elementsDwn = document.getElementsByClassName('dwnWrap')
document.getElementById('third').addEventListener("mouseover", function () {
  for(let i = 0; i < elementsDwn.length; i++){
    elementsDwn[i].style.visibility = 'visible'
  }
  document.getElementById('dwnImg').style.visibility = 'hidden'

});



  document.getElementById('third').addEventListener("mouseout", function () {
    for(let i = 0; i < elementsDwn.length; i++){
      elementsDwn[i].style.visibility = 'hidden'
    }
    document.getElementById('dwnImg').style.visibility = 'visible'

});



//clear input fields
document.getElementById('btnClear').onclick = function () {
  document.location.reload(true)
};

//GENERAL
var numListWidth = document.getElementById('listWidth')
var numListHeight = document.getElementById('listHeight')
var numPlateWidth = document.getElementById('plateWidth')
var numPlateHeight = document.getElementById('plateHeight')
var textCName = document.getElementById('plateCName')
var textCAddress = document.getElementById('plateCAddress')
var textProduct = document.getElementById('plateProduct')
var textModelName = document.getElementById('plateModelName')
var textModelID = document.getElementById('plateModelID')
var drpVoltage = document.getElementById('plateVoltage')
var drpFrequency = document.getElementById('plateFrequency')
var numWattage = document.getElementById('plateWattage')
var numElCurrent = document.getElementById('plateElCurrent')
var ImgLogo = document.getElementById('plateImgLogo')
var ImgCertificat = document.getElementById('plateImgCertificat')
var textSNIdentifier = document.getElementById('plateSNIdentifier')
var numFirstNum = document.getElementById('plateFirstNum')
var numLastNum = document.getElementById('plateLastNum')
var dateProductionDate = document.getElementById('plateProductionDate')
var numHoleDiameter = document.getElementById('numHoleDiameter')
var drpFontFamily = document.getElementById('wPlateSlcFont')

var defaultFontSize = 4
var defaultOffsetInline = 3
var defaultOffsetHole = 5
var defaultHoleDiameter = 1.75
var defaultTextSpacing = 11

//fixed declaration
const defaultUnit = 'mm';
var modelNameFirstPart = '00000000';

numListWidth.value = '600'
numListHeight.value = '600'
numPlateWidth.value = '90'
numPlateHeight.value = '54'


//more settings values
var moreTextSpacing = document.getElementById('numTextSpacing')
var moreLaserLine = document.getElementById('numLaserLines')
var moreBRInner = document.getElementById('numBorderRadiusInner')
var moreBRoutter = document.getElementById('numBorderRadiusOutter')
var moreSettings = document.getElementsByClassName('moreSettings')
var moreTextSize = document.getElementById('numTextSize')

//svg elements dec
var list = document.getElementById('list')
var plateFull = document.getElementById('prv_plate')
var plateBorder = document.getElementById('svg_plateBorder')
var innerLine = document.getElementById('svg_plateInnerLine')
var underLine = document.getElementById('svg_underline')
var holeTL = document.getElementById('svg_hole_tl')
var holeTR = document.getElementById('svg_hole_tr')
var holeBR = document.getElementById('svg_hole_br')
var holeBL = document.getElementById('svg_hole_bl')
var imgLogo = document.getElementById('svg_imgLogo')
var imgCertificat = document.getElementById('svg_imgCertificat')
var companyName = document.getElementById('svg_CompanyName')
var serialNumber = document.getElementById('svg_serialNumber')
var productionDate = document.getElementById('svg_productionDate')
var product = document.getElementById('svg_product')
var modelName = document.getElementById('svg_modelName')
var modelID = document.getElementById('svg_modelID')
var elecRatings = document.getElementById('svg_elecRatings')
var companyAddress = document.getElementById('svg_companyAddress')
var tspantest = document.getElementById('preSvg_product')

var holes = document.getElementsByClassName('hole')
var elms = document.getElementsByClassName('data')
var preData = document.getElementsByClassName('preData')
var fontFamily = document.getElementsByClassName('Ffamily')
var xlinkNS = 'http://www.w3.org/1999/xlink'

var textY = 4
var textX = 0.55
var textSpacing = numPlateHeight.value / defaultTextSpacing
var textSize = numPlateWidth.value / 30
var maxX = Math.floor(numListWidth.value / numPlateWidth.value)
var maxY = Math.floor(numListHeight.value / numPlateHeight.value)
var maxList = maxX * maxY
var nextNum = 0
var mNameString = '0000000'



//preview and fill svg onclick on design
document.getElementById('plateImgLogo').addEventListener('change', function () {
  var reader = new FileReader()
  reader.onload = function (e) {
    document.getElementById('svg_imgLogo').setAttributeNS(xlinkNS, 'href', e.target.result)
  };
  reader.readAsDataURL(this.files[0])
});

document.getElementById('plateImgCertificat').addEventListener('change', function () {
  var reader_two = new FileReader()
  reader_two.onload = function (e) {
    document.getElementById('svg_imgCertificat').setAttributeNS(xlinkNS, 'href', e.target.result)
  };
  reader_two.readAsDataURL(this.files[0])
});

//disable/enable last num
var anchors = document.getElementsByClassName('numChange')
for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('change',   function () {
    maxX = Math.floor(numListWidth.value / numPlateWidth.value)
    maxY = Math.floor(numListHeight.value / numPlateHeight.value)
    maxList = maxX * maxY
    if (document.getElementById('plateChkMaxNum').checked == true) {
      numLastNum.disabled = true
      numLastNum.value = maxList + parseInt(numFirstNum.value)
    } else numLastNum.disabled = false
  });
}


function outputData() {
  numListWidth = document.getElementById('listWidth')
  numListHeight = document.getElementById('listHeight')
  numPlateWidth = document.getElementById('plateWidth')
  numPlateHeight = document.getElementById('plateHeight')
  textCName = document.getElementById('plateCName')
  textCAddress = document.getElementById('plateCAddress')
  textProduct = document.getElementById('plateProduct')
  textModelName = document.getElementById('plateModelName')
  textModelID = document.getElementById('plateModelID')
  drpVoltage = document.getElementById('plateVoltage')
  drpFrequency = document.getElementById('plateFrequency')
  numWattage = document.getElementById('plateWattage')
  numElCurrent = document.getElementById('plateElCurrent')
  ImgLogo = document.getElementById('plateImgLogo')
  ImgCertificat = document.getElementById('plateImgCertificat')
  textSNIdentifier = document.getElementById('plateSNIdentifier')
  numFirstNum = document.getElementById('plateFirstNum')
  numLastNum = document.getElementById('plateLastNum')
  dateProductionDate = document.getElementById('plateProductionDate')
  numHoleDiameter = document.getElementById('numHoleDiameter')
  drpFontFamily = document.getElementById('wPlateSlcFont')



  if (numLastNum.value - numFirstNum.value > maxList) {
    alert("check num plate")
    return
  }
  
  var dateP = dateProductionDate.value
  var finalDate = dateP.split('-')
  dateP = finalDate[1] + '/' + finalDate[0]
  var wattageSign = 'W, '
  var elecTurrentSign = 'A'
  var comma = ', '

  if(numWattage.value == ''){
  wattageSign = ''
  }

  if(numElCurrent.value == ''){
    elecTurrentSign = ''
  }

  if(numWattage.value == '' && numElCurrent.value == ''){
    comma = ''
  }

    //more settings apply

  if(numHoleDiameter.value != ''){
    for(let x=0; x < holes.length; x++){
      holes[x].setAttribute('r', numHoleDiameter.value + defaultUnit)
    }
  }else{
    for(let x=0; x < holes.length; x++){
      holes[x].setAttribute('r', defaultHoleDiameter + defaultUnit)
    }
  }

  if(moreTextSpacing.value != ''){
      textSpacing = numPlateHeight.value / moreTextSpacing.value
  }else textSpacing = numPlateHeight.value / defaultTextSpacing

  if(moreLaserLine.value != ''){
    innerLine.setAttribute('stroke-width', moreLaserLine.value + defaultUnit)
  }else innerLine.setAttribute('stroke-width', 0.2 + defaultUnit)

  if(moreBRInner.value != ''){
    innerLine.setAttribute('rx', moreBRInner.value)
  }else innerLine.setAttribute('rx', 8)

  if(moreBRoutter.value != ''){
    plateBorder.setAttribute('rx', moreBRoutter.value)
  }else plateBorder.setAttribute('rx', 10)
  
  if(moreTextSize.value != ''){
      textSize = numPlateWidth.value/moreTextSize.value
  }else textSize = numPlateWidth.value / 30

  
  //position of elements
  list.setAttribute('width', numListWidth.value + defaultUnit);
  list.setAttribute('height', numListHeight.value + defaultUnit);
  plateBorder.setAttribute('width', numPlateWidth.value + defaultUnit);
  plateBorder.setAttribute('height', numPlateHeight.value + defaultUnit);
  plateFull.setAttribute('height', numPlateHeight.value + defaultUnit)
  plateFull.setAttribute('width', numPlateWidth.value + defaultUnit)
  innerLine.setAttribute('height', numPlateHeight.value - defaultOffsetInline + defaultUnit)
  innerLine.setAttribute('width', numPlateWidth.value - defaultOffsetInline + defaultUnit)
  underLine.setAttribute('x', 2 * defaultOffsetHole + defaultUnit)
  underLine.setAttribute('y', 2 * defaultFontSize + defaultUnit)
  underLine.setAttribute('width', numPlateWidth.value - 4 * defaultOffsetHole + defaultUnit)
  companyName.setAttribute('x', numPlateWidth.value / 2 + defaultUnit)
  companyName.setAttribute('y', defaultFontSize + defaultOffsetInline + defaultUnit)
  companyName.setAttribute('textLength', numPlateWidth.value - 20 + defaultUnit)
  companyAddress.setAttribute('x', numPlateWidth.value / 2 + defaultUnit)
  companyAddress.setAttribute('y', numPlateHeight.value - 1.4 * defaultOffsetInline + defaultUnit)
  companyAddress.setAttribute('textLength', numPlateWidth.value - 20 + defaultUnit)
  holeTR.setAttribute('cx', numPlateWidth.value - defaultOffsetHole + defaultUnit)
  holeBR.setAttribute('cx', numPlateWidth.value - defaultOffsetHole + defaultUnit)
  holeBL.setAttribute('cy', numPlateHeight.value - defaultOffsetHole + defaultUnit)
  holeBR.setAttribute('cy', numPlateHeight.value - defaultOffsetHole + defaultUnit)
  imgLogo.setAttribute('width', numPlateWidth.value / 4.5 + defaultUnit)
  imgLogo.setAttribute('height', numPlateWidth.value / 4.5 + defaultUnit)
  imgLogo.setAttribute('x', numPlateHeight.value / 25 + defaultUnit)

 


  if (inputs[18].value == "") {
    imgLogo.setAttribute('y', numPlateHeight.value / 3.4 + defaultUnit)
  } else {
    imgLogo.setAttribute('y', numPlateHeight.value / 6 + defaultUnit)
    imgCertificat.setAttribute('width', numPlateWidth.value / 4.5 + defaultUnit)
    imgCertificat.setAttribute('height', numPlateWidth.value / 4.5 + defaultUnit)
    imgCertificat.setAttribute('x', numPlateHeight.value / 25 + defaultUnit)
    imgCertificat.setAttribute('y', numPlateHeight.value / 2 + defaultUnit)
  }

  if (textModelName.value == '') {
    modelName.classList.remove('data')
    modelName.setAttribute('display', 'none')
    document.getElementById('preSvg_modelName').classList.remove('preData')
    document.getElementById('preSvg_modelName').setAttribute('display', 'none')

  } else {
    modelName.classList.add('data')
    modelName.setAttribute('display', 'block')
    document.getElementById('preSvg_modelName').classList.add('preData')
    document.getElementById('preSvg_modelName').setAttribute('display', 'block')
  } 


   for (let i = 0; i < fontFamily.length; i++) {
    fontFamily[i].setAttributeNS(null, 'font-family', drpFontFamily.value)
  } 
 
for (let i = 0; i < preData.length; i++) {
    preData[i].setAttributeNS(null, 'font-size', textSize + defaultUnit)
    preData[i].setAttributeNS(null, 'y', numPlateHeight.value / textY + i * textSpacing + defaultUnit)
    preData[i].setAttributeNS(null, 'x',   numPlateWidth.value * textX - 3 + defaultUnit)
    preData[i].setAttributeNS(null, 'letter-spacing',  numPlateWidth.value/400 + defaultUnit)

  }

  for (let i = 0; i < elms.length; i++) {
    elms[i].setAttributeNS(null, 'font-weight', 'bold')
    elms[i].setAttributeNS(null, 'x', numPlateWidth.value * textX + defaultUnit)
    elms[i].setAttributeNS(null, 'font-size', textSize + defaultUnit)
    elms[i].setAttributeNS(null, 'y', numPlateHeight.value / textY + i * textSpacing + defaultUnit)
    elms[i].setAttributeNS(null, 'letter-spacing', numPlateWidth.value/700  + defaultUnit)

  }

 
  //text content of elements
  companyName.textContent = textCName.value 
  companyAddress.textContent = textCAddress.value
  product.textContent = textProduct.value
  serialNumber.textContent = textSNIdentifier.value + mNameString + parseInt(numFirstNum.value)
  productionDate.textContent = dateP
  modelName.innerHTML = textModelName.value 
  modelID.textContent = textModelID.value
  elecRatings.textContent = drpVoltage.value + ' ' + drpFrequency.value + comma + numWattage.value + wattageSign + numElCurrent.value + elecTurrentSign

  openWin()
};
  var platesFinal = document.getElementsByClassName('plates_final')

function openWin() {

  for (let i = 1; i < platesFinal.length; i++) {
    platesFinal[i].setAttribute('display', 'none')
  }
  var onPlateMax = numLastNum.value - numFirstNum.value + 1
  var addup = 1
  for (let x = 0; x < maxY; x += 1) {
    for (let y = 0; y < maxX; y += 1) {
      if (addup > onPlateMax) break;
      var posX = numPlateWidth.value * y + defaultUnit
      var posY = numPlateHeight.value * x + defaultUnit
      cloneSvg(posX, posY, addup)
      addup++
    }
    if (addup > onPlateMax) break;
  }
  addup = 1
  platesFinal[0].setAttribute('display', 'none')
  document.querySelectorAll('.serial')[1].textContent = textSNIdentifier.value + mNameString + parseInt(numFirstNum.value)

  var divText = document.getElementById("listBack").outerHTML;
  var myWindow = window.open('', '', numListWidth.value + 'mm', numListHeight.value + 'mm');
  var doc = myWindow.document;
  doc.open();
  doc.write(divText);
  doc.close();

  platesFinal[0].setAttribute('display', 'block')
};

function cloneSvg(x, y, index) {
  var newrect = plateFull.cloneNode(true)
  list.appendChild(newrect)
  newrect.setAttribute('x', x)
  newrect.setAttribute('y', y)
  nextNum = parseInt(numFirstNum.value) + index
  serialNumber.textContent = textSNIdentifier.value + mNameString + nextNum
};
//downloadsvg

document.getElementById('svgDownload').onclick = function () {
  platesFinal[0].setAttribute('display', 'none')
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(list);
  source = source.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace

  source = source.replace(/ns\d+:href/g, 'xlink:href'); // Safari NS namespace fix.

  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(
      /^<svg/,
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
    ); 

  }

  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, source], {
    type: 'image/svg+xml;charset=utf-8',
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);     
  platesFinal[0].setAttribute('display', 'block')

};

//download pdf
var pointWidth, pointHeight;
document.getElementById('pdfDownload').onclick = function () {
  platesFinal[0].setAttribute('display', 'none')
  
  pointWidth = numListWidth.value * 2.8346456693
  pointHeight = numListHeight.value * 2.8346456693
  let doc = new PDFDocument({ compress: false, size: [pointWidth, pointHeight] });
  SVGtoPDF(doc, list, 0, 0);
  let stream = doc.pipe(blobStream());
  stream.on('finish', () => {
    let blob = stream.toBlob('application/pdf');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'plates.pdf';
    link.click();
  });
  doc.end();

  platesFinal[0].setAttribute('display', 'block')
};


//side menu animate
var rotated = 0
document.getElementById('openArrow').onclick = function(){
    document.getElementById('sideMenu').classList.toggle('sideBarWidth')
    rotated+=180
    document.getElementById('arrow').style.transform = 'rotate('+rotated+'deg)'  
};

 document.getElementById('preOne').addEventListener("mouseover", function () {
    document.getElementById('drpMenu').style.visibility = 'visible'
 });

 document.getElementById('preOne').addEventListener("mouseout", function () {
  document.getElementById('drpMenu').style.visibility = 'hidden'
});

document.getElementById('drpMenu').addEventListener("mouseover", function () {
  document.getElementById('drpMenu').style.visibility = 'visible'
  document.getElementById('preOne').style.background = '#AFB1BE'

});

document.getElementById('drpMenu').addEventListener("mouseout", function () {
document.getElementById('drpMenu').style.visibility = 'hidden'
document.getElementById('preOne').style.background = ''

});


 var checkInputs = document.querySelector('.inputInfo')

 checkInputs.addEventListener('change', () => {
  for(let i = 0; i < dwnClass.length; i++){
    dwnClass[i].style.visibility = "hidden"
}
document.getElementById('dwnImg').style.visibility = "hidden"
 });

//fill inputs

		function GetDetail(str) {
			if (str.length == 0) {
				document.getElementById("listWidth").value = "";
				document.getElementById("listHeight").value = "";
        document.getElementById("plateWidth").value = "";
				document.getElementById("plateHeight").value = "";
				document.getElementById("plateCName").value = "";
				document.getElementById("plateCAddress").value = "";
				document.getElementById("plateProduct").value = "";
				document.getElementById("plateModelName").value = "";
				document.getElementById("plateModelID").value = "";
				document.getElementById("plateSNIdentifier").value = "";
        document.getElementById("plateName").value = "";
        document.getElementById("valbra").value = "";
				document.getElementById("plateFrequency").value = "";
				document.getElementById("plateWattage").value = "";
        document.getElementById("plateElCurrent").value = "";
			
				return;
			}
			else {

				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function () {

					if (this.readyState == 4 &&
							this.status == 200) {
						

						var myObj = JSON.parse(this.responseText);

        document.getElementById("listWidth").value = myObj[0];
				document.getElementById("listHeight").value = myObj[1];
        document.getElementById("plateWidth").value = myObj[2];
				document.getElementById("plateHeight").value = myObj[3];
				document.getElementById("plateCName").value = myObj[4];
				document.getElementById("plateCAddress").value = myObj[5];
				document.getElementById("plateProduct").value = myObj[6];
				document.getElementById("plateModelName").value = myObj[7];
				document.getElementById("plateModelID").value = myObj[8];
				document.getElementById("plateSNIdentifier").value = myObj[9];
        document.getElementById("plateName").value = myObj[10];
        document.getElementById("plateVoltage").value = myObj[11];
				document.getElementById("plateFrequency").value = myObj[12];
				document.getElementById("plateWattage").value = myObj[13];
        document.getElementById("plateElCurrent").value = myObj[14];

					}
				};

				xmlhttp.open("GET", "gfg.php?plateName=" + str, true);
				xmlhttp.send();
			}
		}

    var blurred = document.getElementsByClassName('blur')

  document.getElementById('four').onclick = function(){
    document.getElementById('uploadWindow').style.display = 'block'
    objDiv.scrollTop = 0
    for(let i=0; i < blurred.length; i++){
      blurred[i].style.filter = "blur(5px)"
      blurred[i].style.pointerEvents = "none"
    }
  };

  document.getElementById('exitUpload').onclick = function(){
    document.getElementById('uploadWindow').style.display = 'none';
    for(let i = 0; i < dwnClass.length; i++){
      dwnClass[i].style.visibility = "hidden"
  }
  document.getElementById('dwnImg').style.visibility = "hidden"

    for(let i=0; i < blurred.length; i++){
      blurred[i].style.filter="blur(0px)"
      blurred[i].style.pointerEvents = "auto"
    }
  };