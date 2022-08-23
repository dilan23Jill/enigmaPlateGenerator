$(document).ready(function(){

$("#productionDate").datepicker( {
    format: "mm/yyyy",
    startView: "months", 
    minViewMode: "months"
});

$( "#preview" ).click(function() {

    $("#preview_plate_name").html($("#companyName").val());
   
    $("#serial_number_plate_text").html("Serial Number: " + $("#serialNumber").val());

    $("#production_date_plate_text").html("Production Date: " + $("#productionDate").val());

    $("#product_name_plate_text").html("Product: " + $("#productName").val());

    $("#model_name_plate_text").html("Model Name: " + $("#modelName").val());

    $("#model_id_plate_text").html("Model ID: " + $("#modelId").val());

    $("#elec_ratings_plate_text").html("Elec. ratings: " + $("#ElecRatings").val());

    $("#preview_plate_address").html($("#companyAddress").val());
    
  });


});