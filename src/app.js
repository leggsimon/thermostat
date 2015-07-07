var thermostat = new Thermostat();

var temperatureRefresh = function() {
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  if (thermostat.temperature < 18) { document.getElementById('temperature').style.color = "green"; }
  if (thermostat.temperature < 25) { document.getElementById('temperature').style.color = "orange"; }
  else { document.getElementById('temperature').style.color = "red"; }
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
