$(document).ready(function () {
  $('#productionDate').datepicker({
    format: 'mm/yyyy',
    startView: 'months',
    minViewMode: 'months',
  });
});

const image_enigma_input = document.querySelector('#logo_enigma_input');
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

const che_certifikat = document.querySelector('#logo_certifikat');
che_certifikat.addEventListener('change', function () {
  if (!che_certifikat.checked) {
    document.querySelector('#display_logo_certifikat').style.display = 'none';
    document.querySelector('#display_logo_enigma').style.height = '100%';
  }
  if (che_certifikat.checked) {
    document.querySelector('#display_logo_certifikat').style.display = 'block';
    document.querySelector('#display_logo_enigma').style.height = '50%';
  }
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

function changeWidth(val_width) {
  document.getElementById('svg_plateBorder').style.width = val_width + 'mm';
  document.getElementById('svg_plateInnerLine').style.width =
    val_width - 3 + 'mm';
  document.getElementById('svg_underline').style.width = val_width - 20 + 'mm';
  document.getElementById('svg_hole_tr').style.cx = val_width - 5 + 'mm';
  document.getElementById('svg_hole_br').style.cx = val_width - 5 + 'mm';
 
document
.getElementById('svg_serialNumber')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
.getElementById('svg_productionDate')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
.getElementById('svg_product')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
.getElementById('svg_modelName')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
.getElementById('svg_modelID')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
.getElementById('svg_elecRatings')
.setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');


}

function changeHeight(val_height) {
  document.getElementById('svg_plateBorder').style.height = val_height + 'mm';
  document.getElementById('svg_plateInnerLine').style.height =
    val_height - 3 + 'mm';
  document.getElementById('svg_hole_bl').style.cy = val_height - 5 + 'mm';
  document.getElementById('svg_hole_br').style.cy = val_height - 5 + 'mm';

  document
  .getElementById('svg_serialNumber')
  .setAttribute('y', document.getElementById('plate_height').value * 0.27 + 'mm');

  document
  .getElementById('svg_productionDate')
  .setAttribute('y', document.getElementById('plate_height').value * 0.37 + 'mm');

  document
  .getElementById('svg_product')
  .setAttribute('y', document.getElementById('plate_height').value * 0.47 + 'mm');

  document
  .getElementById('svg_modelName')
  .setAttribute('y', document.getElementById('plate_height').value * 0.57 +'mm');

  document
  .getElementById('svg_modelID')
  .setAttribute('y', document.getElementById('plate_height').value * 0.67 + 'mm');

  document
  .getElementById('svg_elecRatings')
  .setAttribute('y', document.getElementById('plate_height').value * 0.77 + 'mm');
}

function changeUnderline(val_underline) {
  $('#svg_CompanyName').html($('#companyName').val());

  document
    .getElementById('svg_underline')
    .setAttribute('y', val_underline + 'mm');

  switch (val_underline) {
    case '7':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '8':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '8':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '9':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '10':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '11':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    case '12':
      document.getElementById('svg_CompanyName').style.fontSize =
        val_underline / 2 + 'mm';
      break;

    default:
      document.getElementById('svg_CompanyName').style.fontSize = '4mm';
  }
  document
    .getElementById('svg_CompanyName')
    .setAttribute('y', val_underline / 2 + 1.5 + 'mm');
}


document
  .getElementById('svg_serialNumber')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
  .getElementById('svg_productionDate')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
  .getElementById('svg_product')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
  .getElementById('svg_modelName')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
  .getElementById('svg_modelID')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');

document
  .getElementById('svg_elecRatings')
  .setAttribute('x', document.getElementById('plate_width').value * 0.3 + 'mm');


  document
  .getElementById('svg_serialNumber')
  .setAttribute('y', document.getElementById('plate_height').value * 0.27 + 'mm');

  document
  .getElementById('svg_productionDate')
  .setAttribute('y', document.getElementById('plate_height').value * 0.37 + 'mm');

  document
  .getElementById('svg_product')
  .setAttribute('y', document.getElementById('plate_height').value * 0.47 + 'mm');

  document
  .getElementById('svg_modelName')
  .setAttribute('y', document.getElementById('plate_height').value * 0.57 +'mm');

  document
  .getElementById('svg_modelID')
  .setAttribute('y', document.getElementById('plate_height').value * 0.67 + 'mm');

  document
  .getElementById('svg_elecRatings')
  .setAttribute('y', document.getElementById('plate_height').value * 0.77 + 'mm');

  document.getElementById('preview').onclick = function(){
    $('#svg_serialNumber').html("Serial Number: "+$('#serialNumber').val());

    


      var newrect = document.getElementById('svg_plateBorder').cloneNode(true);
      var newrect1 = document.getElementById('svg_plateInnerLine').cloneNode(true);
      document.getElementById('prv_plate').appendChild(newrect);
      document.getElementById('prv_plate').appendChild(newrect1);

      newrect.setAttribute("x", 100);
      newrect.setAttribute("y", 100); 
      newrect1.setAttribute("x", 150);
      newrect1.setAttribute("y", 150); 





 /*    var svgData = $("#prv_plate")[0].outerHTML;
var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
var svgUrl = URL.createObjectURL(svgBlob);
var downloadLink = document.createElement('a');
downloadLink.href = svgUrl;
downloadLink.download = "newesttree.svg";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink); */
  }
  
 


