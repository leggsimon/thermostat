var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.increase = function () {
  (this.temperature = this.temperature + 1)
};

Thermostat.prototype.decrease = function () {
  if (this.temperature <= 10) {
    return "reached minimum temperature"
  }
  this.temperature = this.temperature - 1;
};
