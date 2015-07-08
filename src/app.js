var thermostat = new Thermostat();

var temperatureRefresh = function() {
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  if (thermostat.temperature >= 25) { document.getElementById('temperature').style.color = "red"; }
  if (thermostat.temperature < 25) { document.getElementById('temperature').style.color = "orange"; }
  if (thermostat.temperature < 18) { document.getElementById('temperature').style.color = "green"; }
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

document.getElementById('upButton').onclick    = increaseTemperature;
document.getElementById('downButton').onclick  = decreaseTemperature;
document.getElementById('powersaver').onchange = togglePowerSaverMode;
document.getElementById('resetButton').onclick = resetThermostat;
