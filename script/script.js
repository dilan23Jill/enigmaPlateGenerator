$(document).ready(function () {
  $('#productionDate').datepicker({
    format: 'mm/yyyy',
    startView: 'months',
    minViewMode: 'months',
  });

  $('#preview').click(function () {
    $('#preview_plate_name').html($('#companyName').val());

    $('#serial_number_plate_text').html(
      'Serial Number: ' + $('#serialNumber').val()
    );

    $('#production_date_plate_text').html(
      'Production Date: ' + $('#productionDate').val()
    );

    $('#product_name_plate_text').html('Product: ' + $('#productName').val());

    $('#model_name_plate_text').html('Model Name: ' + $('#modelName').val());

    $('#model_id_plate_text').html('Model ID: ' + $('#modelId').val());

    $('#elec_ratings_plate_text').html(
      'Elec. ratings: ' +
        $('#displayValueOne').val() +
        '~' +
        '&nbsp;' +
        $('#displayValueTwo').val() +
        ',' +
        '&nbsp;' +
        $('#displayValueThree').val() +
        ',' +
        '&nbsp;' +
        $('#displayValueFour').val()
    );

    $('#preview_plate_address').html($('#companyAddress').val());

    $('#display_logo_enigma, #display_logo_certifikat').css(
      'visibility',
      'visible'
    );
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
  document.getElementById('svg_plateInnerLine').style.width =val_width - 3 + 'mm';
  document.getElementById('svg_underline').style.width = val_width - 20 + 'mm';
  document.getElementById('svg_hole_tr').style.cx = val_width - 5 + 'mm';
  document.getElementById('svg_hole_br').style.cx = val_width - 5 + 'mm';
  document.getElementById('svg_CompanyName').setAttribute('x', val_width / 2 + 'mm');
}

function changeHeight(val_height) {
  document.getElementById('svg_plateBorder').style.height = val_height + 'mm';
  document.getElementById('svg_plateInnerLine').style.height =
    val_height - 3 + 'mm';
  document.getElementById('svg_hole_bl').style.cy = val_height - 5 + 'mm';
  document.getElementById('svg_hole_br').style.cy = val_height - 5 + 'mm';
}

function changeUnderline(val_underline) {
  document
    .getElementById('svg_underline')
    .setAttribute('y', val_underline + 'mm');

  switch (val_underline) {
    case '7':
      document.getElementById('svg_CompanyName').style.fontSize = '2mm';
      break;

    case '8':
      document.getElementById('svg_CompanyName').style.fontSize = '2.5mm';
      break;

    case '8':
      document.getElementById('svg_CompanyName').style.fontSize = '5mm';
      break;

    case '9':
      document.getElementById('svg_CompanyName').style.fontSize = '3.5mm';
      break;

    case '10':
      document.getElementById('svg_CompanyName').style.fontSize = '4mm';
      break;

    case '11':
      document.getElementById('svg_CompanyName').style.fontSize = '4.5mm';
      break;

    case '12':
      document.getElementById('svg_CompanyName').style.fontSize = '5mm';
      break;

    default:
      document.getElementById('svg_CompanyName').style.fontSize = '2mm';
  }
  document
    .getElementById('svg_CompanyName')
    .setAttribute('y', val_underline / 2 + 1.5 + 'mm');
}

/* function changeCNtext(val_CNtext) {
  document.getElementById('svg_CompanyName').style.fontSize = val_CNtext + 'mm';
} */
