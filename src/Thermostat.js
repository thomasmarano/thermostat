function Thermostat() {
      this.temp = 20;
      this.minTemp = 10;
      this.maxTemp = 32;
      this.psmaxTemp = 25;
      this.psmode = true

};


Thermostat.prototype.temperature = function() {
    return this.temp;
};

Thermostat.prototype.minTemperature = function() {
    return this.minTemp;
};

Thermostat.prototype.up = function(amount) {
    if (this.powerSaving()) {
        if ((this.temperature() + amount) >= 25) {
            this.temp = 25;
        } else {
          this.temp += amount;
        }
    }   else if ((this.temperature() + amount) >= 32) {
          this.temp = 32
    } else {
      this.temp += amount;
    }
};

Thermostat.prototype.down = function(amount) {
    if ((this.temperature() - amount) <= 10) {
      this.temp = 10
    } else {
      this.temp -= amount
    }
};

Thermostat.prototype.powerSaving = function() {
    return this.psmode;
};

Thermostat.prototype.adjustPS = function(value) {
    this.psmode = value
};

Thermostat.prototype.reset = function() {
    this.temp = 20
}

Thermostat.prototype.usage = function() {
    if (this.temp < 18) {
        return 'low-usage';
    } else if (this.temp < 25) {
        return 'medium-usage';
    } else {
        return 'high-usage';
    }
};
