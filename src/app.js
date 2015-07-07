var thermostat = new Thermostat();

var temperatureRefresh = function() {
  document.getElementById('temperature').innerHTML = thermostat.temperature;
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

document.getElementById('upButton').onclick    = increaseTemperature;
document.getElementById('downButton').onclick  = decreaseTemperature;
document.getElementById('powersaver').onchange = togglePowerSaverMode;
