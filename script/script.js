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

var numPreset = document.getElementsByClassName('numPreset')
let isPreShown = true
document.getElementById('togglePresetBtn').onclick = function () {
  if (!isPreShown) {
    for (let p = 0; p < numPreset.length; p++) {
      numPreset[p].style.visibility = 'visible'
    }
    document.getElementById('presetWindow').style.left = '-13%'
    isPreShown = true
  } else {
    for (let p = 0; p < numPreset.length; p++) {
      numPreset[p].style.visibility = 'hidden'
    }
    document.getElementById('presetWindow').style.left = '0'
    isPreShown = false
  }
};

//design window modifying
let isDesShown = true
var inputs = document.getElementsByClassName('inputInfo')

document.getElementById('btnPreview').onclick = function () {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      if (i == 7 || i == 15 || i == 16 || i == 18 || i > 19) {
      } else {
        alert(i)
        /* return */
      }
    }
  }

  if (!isDesShown) {
    document.getElementById('designWindow').style.right = '-18%'
    isDesShown = true
  } else {
    document.getElementById('designWindow').style.right = '0'
    isDesShown = false
  }
};

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
var valTextSpacing = 9

//fixed declaration
const defaultUnit = 'mm';
const preValueSerialNumber = 'Serial Number: ';
const preValueProductionDate = 'Production Date: ';
const preValueProduct = 'Product: ';
const preValueModelName = 'Model Name: ';
const preValueModelID = 'Model ID: ';
const preValueElecRatings = 'Elec. ratings: ';
var modelNameFirstPart = '00000000';

numListWidth.value = '600'
numListHeight.value = '600'
numPlateWidth.value = '90'
numPlateHeight.value = '54'

//fill with preset 1
document.getElementById('preOne').onclick = function () {
  textCName.value = 'ENIGMA GAMING'
  textCAddress.value = 'ENIGMA GAMING, Vrtine 4, 6276 Pobegi, Slovenia, Europe'
  textProduct.value = 'USA22'
  textModelName.value = 'USA22'
  textModelID.value = 'USA22'
  drpVoltage.value = '12V'
  drpFrequency.value = '50hz'
  numWattage.value = '200'
  numElCurrent.value = '100'
  textSNIdentifier.value = 'USA22'
  numFirstNum.value = '1'
  numLastNum.value = '10'
};

//more settings values
var moreHoleDiameter = document.getElementById('numHoleDiameter')
var moreTextSpacing = document.getElementById('numTextSpacing')
var moreCutSize = document.getElementById('numCutSize')
var moreLaserLine = document.getElementById('numLaserLines')
var moreBRInner = document.getElementById('numBorderRadiusInner')
var moreBRoutter = document.getElementById('numBorderRadiusOutter')

var moreSettings = document.getElementsByClassName('moreSettings')



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

var holes = document.getElementsByClassName('hole')
var elms = document.getElementsByClassName('data')
var fontFamily = document.getElementsByClassName('Ffamily')
var xlinkNS = 'http://www.w3.org/1999/xlink'

var textY = 4
var textX = 0.3
var textSpacing = numPlateHeight.value / 9
var textSize = numPlateWidth.value / 30
var maxX = Math.floor(numListWidth.value / numPlateWidth.value)
var maxY = Math.floor(numListHeight.value / numPlateHeight.value)
var maxList = maxX * maxY
var nextNum = 0
var mNameString = '0000000'
var dateP = dateProductionDate.value



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
  var anchor = anchors[i];
  anchor.onchange = function () {
    maxX = Math.floor(numListWidth.value / numPlateWidth.value)
    maxY = Math.floor(numListHeight.value / numPlateHeight.value)
    maxList = maxX * maxY
    if (document.getElementById('plateChkMaxNum').checked == true) {
      numLastNum.disabled = true
      numLastNum.value = maxList + parseInt(numFirstNum.value)
    } else numLastNum.disabled = false
  }
}

document.getElementById('desOne').onclick = function () {
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

  if (dateP.includes('/')) {
    dateP = dateP.split('/')
  } else if (dateP.includes('-')) {
    dateP = dateP.split('-')
  }
  dateProductionDate = dateP[1] + '/' + dateP[0]

 

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
  imgLogo.setAttribute('width', numPlateWidth.value / 4 + defaultUnit)
  imgLogo.setAttribute('height', numPlateWidth.value / 4 + defaultUnit)
  imgLogo.setAttribute('x', numPlateHeight.value / 25 + defaultUnit)
  if (inputs[18].value == "") {
    imgLogo.setAttribute('y', numPlateHeight.value / 3.4 + defaultUnit)
  } else {
    imgLogo.setAttribute('y', numPlateHeight.value / 6 + defaultUnit)
    imgCertificat.setAttribute('width', numPlateWidth.value / 4 + defaultUnit)
    imgCertificat.setAttribute('height', numPlateWidth.value / 4 + defaultUnit)
    imgCertificat.setAttribute('x', numPlateHeight.value / 25 + defaultUnit)
    imgCertificat.setAttribute('y', numPlateHeight.value / 2 + defaultUnit)
  }

  if (textModelName.value == '') {
    modelName.classList.remove('data')
    modelName.setAttribute('display', 'none')
  } else {
    modelName.classList.add('data')
    modelName.setAttribute('display', 'block')
  }
  for (let i = 0; i < elms.length; i++) {
    elms[i].setAttributeNS(null, 'x', numPlateWidth.value * textX + defaultUnit)
    elms[i].setAttributeNS(null, 'font-size', textSize + defaultUnit)
    elms[i].setAttributeNS(null, 'y', numPlateHeight.value / textY + i * textSpacing + defaultUnit)
  }

  for (let i = 0; i < fontFamily.length; i++) {
    fontFamily[i].setAttributeNS(null, 'font-family', drpFontFamily.value)
  }

  //text content of elements
  companyName.textContent = textCName.value
  companyAddress.textContent = textCAddress.value
  product.textContent = preValueProduct + textProduct.value
  serialNumber.textContent = preValueSerialNumber + textSNIdentifier.value + mNameString + parseInt(numFirstNum.value)
  productionDate.textContent = preValueProductionDate + dateProductionDate
  modelName.textContent = preValueModelName + textModelName.value
  modelID.textContent = preValueModelID + textModelID.value
  elecRatings.textContent = preValueElecRatings + drpVoltage.value + '~' + drpFrequency.value + ', ' + numWattage.value + 'W, ' + numElCurrent.value + 'A'

  //more settings
  textSize = numPlateWidth.value / 30
  textSpacing = numPlateHeight.value / valTextSpacing

  openWin()
};

function openWin() {
  var platesFinal = document.getElementsByClassName('plates_final')

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
  document.querySelectorAll('.serial')[1].textContent = preValueSerialNumber + textSNIdentifier.value + mNameString + parseInt(numFirstNum.value)

  var divText = document.getElementById("listBack").outerHTML;
  var myWindow = window.open('', '', numListWidth.value + 'mm', numListHeight.value + 'mm');
  var doc = myWindow.document;
  doc.open();
  doc.write(divText);
  doc.close();

  platesFinal[0].setAttribute('display', 'block')
};

function cloneSvg(x, y, index) {
  var newrect = document.getElementById('prv_plate').cloneNode(true)
  list.appendChild(newrect)
  newrect.setAttribute('x', x)
  newrect.setAttribute('y', y)
  nextNum = parseInt(numFirstNum.value) + index
  serialNumber.textContent = preValueSerialNumber + textSNIdentifier.value + mNameString + nextNum
};


//downloadsvg

document.getElementById('svgDownload').onclick = function () {
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
};


//download pdf

document.getElementById('pdfDownload').onclick = function () {
  let doc = new PDFDocument({ compress: false, size: [1700, 1700] });
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
};