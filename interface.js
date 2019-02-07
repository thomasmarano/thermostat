$(document).ready(function(){

    var thermostat = new Thermostat();

    $('#temperature').text(thermostat.temperature());


    $('#temperature-up').on('click', function(){
      thermostat.up(1);
      updateTemperature();
    })

    $('#temperature-down').on('click', function(){
      thermostat.down(1);
      updateTemperature();
    })

    $('#temperature-reset').on('click', function(){
      thermostat.reset();
      updateTemperature();
    })

    $('#power-saving-on').on('click', function(){
      thermostat.turnOnPs();
      $('#power-saving-status').text('on');
    })

    $('#power-saving-off').on('click', function(){
        thermostat.turnOffPs();
        $('#power-saving-status').text('off')
    })


    function updateTemperature() {
      $('#temperature').text(thermostat.temperature());
    }
});
