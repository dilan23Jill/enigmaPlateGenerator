$(document).ready(function () {
  $('#productionDate').datepicker({
    format: 'mm/yyyy',
    startView: 'months',
    minViewMode: 'months',
  });
});
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
const defaultWidth = 90;
const defaultHeight = 54;
const defaultFontSize = 4;
const defaultOffsetInline = 3;
const defaultOffsetHole = 5;

let textY = 4;
let textX = 0.3;
let textSpacing = textY * 1.5;

const textSerialNumber = 'Serial Number: ';
const textProductionDate = 'Production Date: ';
const textProduct = 'Product: ';
const textModelName = 'Model Name: ';
const textModelID = 'Model ID: ';
const textElecRatings = 'Elec. ratings: ';

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

$('#logo_enigma_input').on('change', function () {
  var reader = new FileReader();
  reader.onload = function (e) {
    $('#svg_imgLogo')[0].setAttributeNS(xlinkNS, 'href', e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});

imgLogo.setAttribute('width', defaultWidth/5 + defaultUnit);
imgLogo.setAttribute('height', defaultWidth/5 + defaultUnit);
imgLogo.setAttribute('x', defaultWidth/25 + defaultUnit);
imgLogo.setAttribute('y', defaultHeight/5 + defaultUnit);

$('#logo_certifikat_input').on('change', function () {
  var reader_two = new FileReader();
  reader_two.onload = function (e) {
    $('#svg_imgCertificat')[0].setAttributeNS(xlinkNS, 'href', e.target.result);
  };
  reader_two.readAsDataURL(this.files[0]);
});

imgCertificat.setAttribute('width', defaultWidth/5 + defaultUnit);
imgCertificat.setAttribute('height', defaultWidth/5 + defaultUnit);
imgCertificat.setAttribute('x', defaultWidth/25 + defaultUnit);
imgCertificat.setAttribute('y', defaultHeight/2 + defaultUnit);

plateBorder.setAttribute('width', defaultWidth + defaultUnit);
plateBorder.setAttribute('height', defaultHeight + defaultUnit);

plateFull.setAttribute('width', defaultWidth + defaultUnit);
plateFull.setAttribute('height', defaultHeight + defaultUnit);

innerLine.setAttribute('width', defaultWidth - defaultOffsetInline + defaultUnit);
innerLine.setAttribute('height', defaultHeight - defaultOffsetInline + defaultUnit);

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
  plateFull.setAttribute('width', val_width + defaultUnit);
}
function equalizeSvgHeight(val_height) {
  plateFull.setAttribute('height', val_height + defaultUnit);

}

function changeWidth(val_width) {
  plateBorder.setAttribute('width', val_width + defaultUnit);
  innerLine.setAttribute('width', val_width - defaultOffsetInline + defaultUnit);
  underLine.setAttribute('width', val_width - 4 * defaultOffsetHole + defaultUnit);

  holeTR.setAttribute('cx', val_width - defaultOffsetHole + defaultUnit);
  holeBR.setAttribute('cx', val_width - defaultOffsetHole + defaultUnit);

  companyName.setAttribute('x', val_width / 2 + defaultUnit);
  companyAddress.setAttribute('x', val_width / 2 + defaultUnit);

  for (var i = 0; i < elms.length; i++) {
    elms[i].setAttribute('x', val_width * textX + defaultUnit);
  }

  companyName.setAttribute('textLength', val_width - 20 + defaultUnit);
  companyAddress.setAttribute('textLength', val_width - 20 + defaultUnit);

  imgLogo.setAttribute('width', val_width/4 + defaultUnit);
  imgLogo.setAttribute('x', val_width/25 + defaultUnit);

  imgCertificat.setAttribute('width', val_width/4 + defaultUnit);
  imgCertificat.setAttribute('x', val_width/25 + defaultUnit);

  equalizeSvgWidth(val_width);
}

function changeHeight(val_height) {
  plateBorder.setAttribute(
    'height',
    val_height + defaultUnit
  );
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

  imgLogo.setAttribute('y', val_height/5 + defaultUnit);

  imgCertificat.setAttribute('y', val_height/2 + defaultUnit);


  equalizeSvgHeight(val_height);
}

document.getElementById('previewBtn').onclick = function () {
  companyName.textContent = document.getElementById('companyName').value;
  companyAddress.textContent = document.getElementById('companyAddress').value;
  serialNumber.textContent =
    textSerialNumber + document.getElementById('serialNumber').value;
  productionDate.textContent =
    textProductionDate + document.getElementById('productionDate').value;
  product.textContent =
    textProduct + document.getElementById('productName').value;
  modelName.textContent =
    textModelName + document.getElementById('modelName').value;
  modelID.textContent = textModelID + document.getElementById('modelId').value;
  elecRatings.textContent =
    textElecRatings +
    document.getElementById('displayValueOne').value +
    '~' +
    document.getElementById('displayValueTwo').value +
    ', ' +
    document.getElementById('displayValueThree').value +
    ', ' +
    document.getElementById('displayValueFour').value;
};

document.getElementById('downloadBtn').onclick = function () {
 var svgData = $("#prv_plate")[0].outerHTML;
  var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = "newitem.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);  

};



  
