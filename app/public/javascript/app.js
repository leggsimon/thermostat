var thermostat = new Thermostat();

var temperatureRefresh = function() {
  $('#temperature').html(thermostat.temperature);
  if (thermostat.temperature >= 25) { $('#temperature').css("color", "red"); }
  if (thermostat.temperature < 25)  { $('#temperature').css("color", "orange"); }
  if (thermostat.temperature < 18)  { $('#temperature').css("color", "green"); }
}

var increaseTemperature = function() {
  thermostat.increase();
  temperatureRefresh();
}

var decreaseTemperature = function() {
  thermostat.decrease();
  temperatureRefresh();
}

var togglePowerSaverMode = function() {
  thermostat.togglePowerSave();
  temperatureRefresh();
}

var resetThermostat = function() {
  thermostat.resetTemperature();
  temperatureRefresh();
}

var getCity = function () {
  return $('#cityList').val()
};

var getCityTemperature = function(city) {
  console.log(city)
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b3e354ab2227f3e98542190461b7fe44&units=metric"
  var response = $.get(url).done(function() {
    $('#cityWeather').html("Current temperature: " + response.responseJSON.main.temp + "&#x2103")
  })

}

temperatureRefresh();
getCityTemperature(getCity());

$('#upButton').click(increaseTemperature);
$('#downButton').click(decreaseTemperature);
$('#powersaver').change(togglePowerSaverMode);
$('#resetButton').click(resetThermostat);
$('#cityList').on('change', function() {
    getCityTemperature(getCity())
});
