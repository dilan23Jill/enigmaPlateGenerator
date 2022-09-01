$(document).ready(function () {
 
document
  .querySelector('#selec_elec_one')
  .addEventListener('change', function () {
    document.getElementById('displayValueOne').value =
      this.options[this.selectedIndex].text;
    document.getElementById('idValueOne').value =
      this.options[this.selectedIndex].value;
  });

document
  .querySelector('#selec_elec_two')
  .addEventListener('change', function () {
    document.getElementById('displayValueTwo').value =
      this.options[this.selectedIndex].text;
    document.getElementById('idValueTwo').value =
      this.options[this.selectedIndex].value;
  });

const defaultUnit = 'mm';
let defaultWidth = 90;
let defaultHeight = 54;
const defaultFontSize = 4;
const defaultOffsetInline = 3;
const defaultOffsetHole = 5;
const printPageSize = 600;

let textY = 4;
let textX = 0.3;
let textSpacing = textY * 1.4;
let maxX = 6;
let maxY = 11;
let maxNumPlate = 66;
let startNum = document.getElementById('serialNumberStart');
let lastNum = document.getElementById('serialNumberUntil');
let modelNameFirstPart = '00000000';
let modelNameComplete;

const textSerialNumber = 'Serial Number: ';
const textProductionDate = 'Production Date: ';
const textProduct = 'Product: ';
const textModelName = 'Model Name: ';
const textModelID = 'Model ID: ';
const textElecRatings = 'Elec. ratings: ';

var holes = document.getElementsByClassName('hole');
var elms = document.getElementsByClassName('data');
var plateFull = document.getElementById('prv_plate');
var plateBorder = document.getElementById('svg_plateBorder');
var innerLine = document.getElementById('svg_plateInnerLine');
var underLine = document.getElementById('svg_underline');
var holeTR = document.getElementById('svg_hole_tr');
var holeBR = document.getElementById('svg_hole_br');
var holeBL = document.getElementById('svg_hole_bl');

var companyName = document.getElementById('svg_CompanyName');
var serialNumber = document.getElementById('svg_serialNumber');
var productionDate = document.getElementById('svg_productionDate');
var product = document.getElementById('svg_product');
var modelName = document.getElementById('svg_modelName');
var modelID = document.getElementById('svg_modelID');
var elecRatings = document.getElementById('svg_elecRatings');
var companyAddress = document.getElementById('svg_companyAddress');

var imgLogo = document.getElementById('svg_imgLogo');
var imgCertificat = document.getElementById('svg_imgCertificat');

var xlinkNS = 'http://www.w3.org/1999/xlink';

document
  .querySelector('#logo_certifikat')
  .addEventListener('change', function () {
    if (document.getElementById('logo_certifikat').checked == true) {
      document.getElementById('logo_certifikat_input').disabled = false;
      imgLogo.setAttribute('y', defaultHeight / 5 + defaultUnit);
    } else {
      document.getElementById('logo_certifikat_input').disabled = true;
      imgLogo.setAttribute('y', defaultHeight / 3 + defaultUnit);
      imgCertificat.setAttribute('display', 'none');
    }
  });

$('#logo_enigma_input').on('change', function () {
  var reader = new FileReader();
  reader.onload = function (e) {
    $('#svg_imgLogo')[0].setAttributeNS(xlinkNS, 'href', e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});

imgLogo.setAttribute('width', defaultWidth / 4 + defaultUnit);
imgLogo.setAttribute('height', defaultWidth / 4 + defaultUnit);
imgLogo.setAttribute('x', defaultWidth / 25 + defaultUnit);
imgLogo.setAttribute('y', defaultHeight / 6 + defaultUnit);

$('#logo_certifikat_input').on('change', function () {
  var reader_two = new FileReader();
  reader_two.onload = function (e) {
    $('#svg_imgCertificat')[0].setAttributeNS(xlinkNS, 'href', e.target.result);
  };
  reader_two.readAsDataURL(this.files[0]);
});

imgCertificat.setAttribute('width', defaultWidth / 4 + defaultUnit);
imgCertificat.setAttribute('height', defaultWidth / 4 + defaultUnit);
imgCertificat.setAttribute('x', defaultWidth / 25 + defaultUnit);
imgCertificat.setAttribute('y', defaultHeight / 2 + defaultUnit);

plateBorder.setAttribute('width', defaultWidth + defaultUnit);
plateBorder.setAttribute('height', defaultHeight + defaultUnit);

plateFull.setAttribute('width', 600 + defaultUnit);
plateFull.setAttribute('height', 600 + defaultUnit);

innerLine.setAttribute(
  'width',
  defaultWidth - defaultOffsetInline + defaultUnit
);
innerLine.setAttribute(
  'height',
  defaultHeight - defaultOffsetInline + defaultUnit
);

underLine.setAttribute('x', 2 * defaultOffsetHole + defaultUnit);
underLine.setAttribute('y', defaultFontSize * 2 + defaultUnit);

companyName.setAttribute('x', defaultWidth / 2 + defaultUnit);
companyName.setAttribute(
  'y',
  defaultFontSize + defaultOffsetInline + defaultUnit
);
companyName.setAttribute('textLength', defaultWidth - 20 + defaultUnit);

companyAddress.setAttribute('x', defaultWidth / 2 + defaultUnit);
companyAddress.setAttribute(
  'y',
  defaultHeight - 1.4 * defaultOffsetInline + defaultUnit
);
companyAddress.setAttribute('textLength', defaultWidth - 20 + defaultUnit);

for (var i = 0; i < elms.length; i++) {
  elms[i].setAttribute('x', defaultWidth * textX + defaultUnit);
}

for (var i = 0; i < elms.length; i++) {
  /*   elms[i].setAttribute('dominant-baseline', "middle");
   */ elms[i].setAttribute(
    'y',
    defaultHeight / textY + i * textSpacing + defaultUnit
  );
}

function equalizeSvgWidth(val_width) {
  defaultWidth = val_width;
  maxY = printPageSize / defaultHeight;

  maxX = printPageSize / val_width;
  maxNumPlate = Math.floor(maxY) * Math.floor(maxX);
  document.getElementById('displayMaxPlate').innerHTML = maxNumPlate;
  if (document.getElementById('chk_maxNumPlate').checked == true)
    lastNum.value = parseInt(maxNumPlate) + parseInt(startNum.value);
}

function equalizeSvgHeight(val_height) {
  defaultHeight = val_height;
  maxX = printPageSize / defaultWidth;
  maxY = printPageSize / val_height;
  maxNumPlate = Math.floor(maxY) * Math.floor(maxX);
  document.getElementById('displayMaxPlate').innerHTML = maxNumPlate;
  defaultHeight = val_height;
  if (document.getElementById('chk_maxNumPlate').checked == true)
    lastNum.value = parseInt(maxNumPlate) + parseInt(startNum.value);
}

function changeWidth(val_width) {
  plateBorder.setAttribute('width', val_width + defaultUnit);
  innerLine.setAttribute(
    'width',
    val_width - defaultOffsetInline + defaultUnit
  );
  underLine.setAttribute(
    'width',
    val_width - 4 * defaultOffsetHole + defaultUnit
  );

  holeTR.setAttribute('cx', val_width - defaultOffsetHole + defaultUnit);
  holeBR.setAttribute('cx', val_width - defaultOffsetHole + defaultUnit);

  companyName.setAttribute('x', val_width / 2 + defaultUnit);
  companyAddress.setAttribute('x', val_width / 2 + defaultUnit);

  for (var i = 0; i < elms.length; i++) {
    elms[i].setAttribute('x', val_width * textX + defaultUnit);
  }

  companyName.setAttribute('textLength', val_width - 20 + defaultUnit);
  companyAddress.setAttribute('textLength', val_width - 20 + defaultUnit);

  imgLogo.setAttribute('width', val_width / 4 + defaultUnit);
  imgLogo.setAttribute('x', val_width / 25 + defaultUnit);

  imgCertificat.setAttribute('width', val_width / 4 + defaultUnit);
  imgCertificat.setAttribute('x', val_width / 25 + defaultUnit);

  equalizeSvgWidth(val_width);
}

function changeHeight(val_height) {
  plateBorder.setAttribute('height', val_height + defaultUnit);
  innerLine.setAttribute(
    'height',
    val_height - defaultOffsetInline + defaultUnit
  );
  holeBL.setAttribute('cy', val_height - defaultOffsetHole + defaultUnit);
  holeBR.setAttribute('cy', val_height - defaultOffsetHole + defaultUnit);

  companyAddress.setAttribute(
    'y',
    val_height - 1.4 * defaultOffsetInline + defaultUnit
  );

  for (var i = 0; i < elms.length; i++) {
    textSpacing = val_height / 9;
    elms[i].setAttribute(
      'y',
      val_height / textY + i * textSpacing + defaultUnit
    );
  }

  imgLogo.setAttribute('y', val_height / 6 + defaultUnit);

  imgCertificat.setAttribute('y', val_height / 2 + defaultUnit);

  equalizeSvgHeight(val_height);
}

document.getElementById('previewBtn').onclick = function () {
  if (lastNum.value - startNum.value > maxNumPlate) {
    alert('TO moany plates');
  } else if (lastNum.value - startNum.value <= 0) {
    alert('Start number cant be higher than last');
  } else if (lastNum.value < 1 || startNum.value < 1) {
    alert('Number cant be lower than 1');
  } else {
    
    modelNameComplete = startNum.value + '';
    modelNameFirstPart = '00000000';
    for (i = 0; i <= modelNameComplete.length; i++) {
      modelNameFirstPart = modelNameFirstPart.substring(
        0,
        modelNameFirstPart.length - 1
      );

    }
    modelNameComplete =
      document.getElementById('serialNumber').value +
      modelNameFirstPart +
      modelNameComplete;

    companyName.textContent = document.getElementById('companyName').value;
    companyAddress.textContent =
      document.getElementById('companyAddress').value;
    serialNumber.textContent = textSerialNumber + modelNameComplete;
    productionDate.textContent =
      textProductionDate + document.getElementById('productionDate').value;
    product.textContent =
      textProduct + document.getElementById('productName').value;
    modelName.textContent =
      textModelName + document.getElementById('modelName').value;
    modelID.textContent =
      textModelID + document.getElementById('modelId').value;
    elecRatings.textContent =
      textElecRatings +
      document.getElementById('displayValueOne').value +
      '~' +
      document.getElementById('displayValueTwo').value +
      ', ' +
      document.getElementById('displayValueThree').value +
      'W, ' +
      document.getElementById('displayValueFour').value +
      'A';
  }
   draw(defaultWidth, defaultHeight);
 };

document.getElementById('download').onclick = function () {
  downloadSvg();
};

document
  .querySelector('#chk_maxNumPlate')
  .addEventListener('change', function () {
    if (document.getElementById('chk_maxNumPlate').checked == true)
      lastNum.value = parseInt(maxNumPlate) + parseInt(startNum.value);
  });

document
  .querySelector('#chk_enableModelName')
  .addEventListener('change', function () {
    if (document.getElementById('chk_enableModelName').checked == false) {
      document.getElementById('modelName').disabled = true;
      modelName.setAttribute('display', 'none');
      modelID.setAttribute(
        'y',
        defaultHeight / textY + 3 * textSpacing + defaultUnit
      );
      elecRatings.setAttribute(
        'y',
        defaultHeight / textY + 4 * textSpacing + defaultUnit
      );
    } else {
      document.getElementById('modelName').disabled = false;
      modelName.style.display = 'block';
      modelID.setAttribute(
        'y',
        defaultHeight / textY + 4 * textSpacing + defaultUnit
      );
      elecRatings.setAttribute(
        'y',
        defaultHeight / textY + 5 * textSpacing + defaultUnit
      );
    }
  });

document
  .querySelector('#serialNumberStart')
  .addEventListener('change', function () {
    if (document.getElementById('chk_maxNumPlate').checked == true)
      lastNum.value = parseInt(maxNumPlate) + parseInt(startNum.value);
  });

document.querySelector('#hole_size').addEventListener('change', function () {
  for (var i = 0; i < holes.length; i++) {
    holes[i].setAttribute('r', this.value + 'mm');
  }
});

document.querySelector('#text_spacing').addEventListener('change', function () {
  textSpacing = this.value;
  for (var i = 0; i < elms.length; i++) {
    elms[i].setAttribute(
      'y',
      defaultHeight / textY + i * textSpacing + defaultUnit
    );
  }
});

var plates_final = document.getElementsByClassName('plates_final');
let addup = 1;
var x, y;
let posX, posY;

function draw(width, height) {
  var numPlate=  document.getElementById('serialNumberUntil').value-document.getElementById('serialNumberStart').value +1;
  var virX = Math.floor(maxX);
  var virY = Math.floor(maxY);

  for (x = 0; x < virY; x += 1) {
    for (y = 0; y < virX; y += 1) {
      if(addup<numPlate){
        posX = width * y + defaultUnit;
        posY = height * x + defaultUnit;        
        cloneSvg(posX, posY, addup);
      addup++;
    }        

  }
  
  }
} 
function cloneSvg(x,y,index){
  var newrect = document.getElementById('prv_plate').cloneNode(true);
  document.getElementById('bra').appendChild(newrect);
  newrect.setAttribute("x", x);
  newrect.setAttribute("y", y);
  if(index>1)
  document.getElementsByClassName('serial')[index].textContent=textSerialNumber + parseInt(document.getElementById('serialNumberStart').value) + index; 
 console.log(index);
}

function downloadSvg() {
  var svg = document.getElementById('bra');
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);
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
}


});
