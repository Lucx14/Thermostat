$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });



  // call to the weatherAPI
  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });
  // $('#current-city').change(function() {
  //   // displayWeather('Paris');
  // })







  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };


  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city;
    var units = '&units=metric';
    var token = '&appid=3d1b4735c79467224f1d7ed6725b41fc';
    $.get(url + units + token, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

});
