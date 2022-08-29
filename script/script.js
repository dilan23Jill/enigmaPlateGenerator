$(document).ready(function () {
  $('#productionDate').datepicker({
    format: 'mm/yyyy',
    startView: 'months',
    minViewMode: 'months',
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
/* const image_enigma_input = document.querySelector('#logo_enigma_input');
var uploaded_enigma_image = '';

image_enigma_input.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_enigma_image = reader.result;
    document.querySelector(
      '#display_logo_enigma'
    ).style.backgroundImage = `url(${uploaded_enigma_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_certifikat_input = document.querySelector('#logo_certifikat_input');
var uploaded_certifikat_image = '';

image_certifikat_input.addEventListener('change', function () {
  const reader_two = new FileReader();
  reader_two.addEventListener('load', () => {
    uploaded_certifikat_image = reader_two.result;
    document.querySelector(
      '#display_logo_certifikat'
    ).style.backgroundImage = `url(${uploaded_certifikat_image})`;
  });
  reader_two.readAsDataURL(this.files[0]);
});

  */

 const defaultUnit = 'mm'
 const defaultWidth = 90;
 const defaultHeight = 54;
 const defaultFontSize  = 4;
 const defaultOffsetInline = 3;
 const defaultOffsetHole = 5;

 let textY = 4;
 let textX = 0.3;
 let textSpacing = textY*1.5;

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

 plateBorder.style.width = defaultWidth + defaultUnit;
 plateBorder.style.height = defaultHeight + defaultUnit;

 plateFull.style.width = defaultWidth + defaultUnit;
 plateFull.style.height = defaultHeight + defaultUnit;

 innerLine.style.width = defaultWidth - defaultOffsetInline + defaultUnit;
 innerLine.style.height = defaultHeight - defaultOffsetInline + defaultUnit;

 underLine.setAttribute('x', 2*defaultOffsetHole + defaultUnit);
 underLine.setAttribute('y', defaultFontSize * 2 + defaultUnit);

 companyName.setAttribute('x', defaultWidth/2 + defaultUnit);
 companyName.setAttribute('y', defaultFontSize + defaultOffsetInline  + defaultUnit);
 companyName.setAttribute('textLength', defaultWidth-20 + defaultUnit);

 companyAddress.setAttribute('x', defaultWidth/2 + defaultUnit);
 companyAddress.setAttribute('y', defaultHeight - 1.4 * defaultOffsetInline  + defaultUnit);
 companyAddress.setAttribute('textLength', defaultWidth-20 + defaultUnit);

 for (var i = 0; i < elms.length; i++) {
  elms[i].setAttribute('x', defaultWidth * textX + defaultUnit);
 }

 for (var i = 0; i < elms.length; i++) {
/*   elms[i].setAttribute('dominant-baseline', "middle");
 */  elms[i].setAttribute('y', defaultHeight / textY + i*textSpacing + defaultUnit);
 }

 function equalizeSvgWidth(val_width){
 plateFull.style.width = val_width + defaultUnit;
 }
 function equalizeSvgHeight(val_height){
  plateFull.style.height = val_height + defaultUnit;
  }

 function changeWidth(val_width) {
  plateBorder.style.width = val_width + defaultUnit;
  innerLine.style.width = val_width - defaultOffsetInline + defaultUnit;
  underLine.style.width = val_width - 4*defaultOffsetHole  + defaultUnit;
  holeTR.style.cx = val_width - defaultOffsetHole + defaultUnit;
  holeBR.style.cx = val_width - defaultOffsetHole + defaultUnit;
  companyName.setAttribute('x', val_width/2  + defaultUnit);
  companyAddress.setAttribute('x', val_width/2 + defaultUnit);


  for (var i = 0; i < elms.length; i++) {
   elms[i].setAttribute('x', val_width * textX + defaultUnit);
  }

  companyName.setAttribute('textLength', val_width - 20 + defaultUnit);
  companyAddress.setAttribute('textLength', val_width - 20 + defaultUnit);

  equalizeSvgWidth(val_width);
}

function changeHeight(val_height) {
  plateBorder.style.height = val_height + defaultUnit;
  innerLine.style.height = val_height - defaultOffsetInline + defaultUnit;
  holeBL.style.cy = val_height - defaultOffsetHole + defaultUnit;
  holeBR.style.cy = val_height - defaultOffsetHole + defaultUnit;
  companyAddress.setAttribute('y', val_height - 1.4 * defaultOffsetInline  + defaultUnit);

  for (var i = 0; i < elms.length; i++) {
    textSpacing = val_height/9;
    elms[i].setAttribute('y', val_height / textY + i*textSpacing + defaultUnit);
     }
     equalizeSvgHeight(val_height);
}

  document.getElementById('previewBtn').onclick = function(){
  companyName.textContent = document.getElementById('companyName').value;  
  companyAddress.textContent = document.getElementById('companyAddress').value;
  serialNumber.textContent = textSerialNumber + document.getElementById('serialNumber').value;
  productionDate.textContent = textProductionDate + document.getElementById('productionDate').value;
  product.textContent = textProduct + document.getElementById('productName').value;
  modelName.textContent = textModelName + document.getElementById('modelName').value;
  modelID.textContent = textModelID + document.getElementById('modelId').value;
  elecRatings.textContent = textElecRatings + document.getElementById('displayValueOne').value + "~" + document.getElementById('displayValueTwo').value
  + ", " + document.getElementById('displayValueThree').value + ", " + document.getElementById('displayValueFour').value;

/*   var svgData = $("#prv_plate")[0].outerHTML;
  var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = "newesttree.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink); 
 */
 } 



});