thermostat = new Thermostat();

var increaseTemperature = function() {
  thermostat.increase();
  document.getElementById('temperature').innerHTML = thermostat.temperature
}

var decreaseTemperature = function() {
  thermostat.decrease();
  document.getElementById('temperature').innerHTML = thermostat.temperature
}

var togglePowerSaverMode = function() {
  thermostat.togglePowerSave();
  document.getElementById('temperature').innerHTML = thermostat.temperature
}
