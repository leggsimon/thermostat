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

temperatureRefresh();

$('#upButton').click(increaseTemperature);
$('#downButton').click(decreaseTemperature);
$('#powersaver').change(togglePowerSaverMode);
$('#resetButton').click(resetThermostat);
