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
      'Elec. ratings: ' + $('#displayValueOne').val() + "~" + "&nbsp;" + $('#displayValueTwo').val() + 
      "," + "&nbsp;" + $('#displayValueThree').val() + "," + "&nbsp;" + $('#displayValueFour').val()
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
  if(!che_certifikat.checked) {
    document.querySelector('#display_logo_certifikat').style.display = "none";
    document.querySelector('#display_logo_enigma').style.height = "100%";
  }
  if(che_certifikat.checked) {
    document.querySelector('#display_logo_certifikat').style.display = "block";
    document.querySelector('#display_logo_enigma').style.height = "50%";
  }
});


document.querySelector('#selec_elec_one').addEventListener('change', function () {
document.getElementById('displayValueOne').value=this.options[this.selectedIndex].text; 
document.getElementById('idValueOne').value=this.options[this.selectedIndex].value;
});

document.querySelector('#selec_elec_two').addEventListener('change', function () {
  document.getElementById('displayValueTwo').value=this.options[this.selectedIndex].text; 
  document.getElementById('idValueTwo').value=this.options[this.selectedIndex].value;
});



