'use strict';

describe("Thermostat", function(){
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it ('ensures thermostat temperature starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    })

    it('lets you increase the temperature with an up function', function(){
      var x = thermostat.temperature();
      thermostat.up(3);
      expect(thermostat.temperature()).toBeGreaterThan(x);
    });

    it('lets you decrease the temperature with a down function', function(){
      var y = thermostat.temperature();
      thermostat.down(3);
      expect(thermostat.temperature()).toBeLessThan(y);
    });

    it('only lets the user put temperature down', function(){
      thermostat.down(3);
      expect(thermostat.temperature()).toEqual(17)
    })

    it('only lets the user put temperature to the min temperature', function(){
      thermostat.down(20);
      expect(thermostat.temperature()).toEqual(10)
    })

    it("won't raise temperature above 32 degrees", function(){
    thermostat.turnOffPs();
    thermostat.up(20);
    expect(thermostat.temperature()).toEqual(32)
    })

    it("confirms that thermostat starts with power saving mode on", function(){
    expect(thermostat.powerSaving()).toEqual(true)
    });

    it("turns off power saving mode", function(){
      thermostat.turnOffPs();
      expect(thermostat.powerSaving()).toEqual(false)
    })

    it("turns on power saving mode", function(){
      thermostat.turnOffPs();
      thermostat.turnOnPs();
      expect(thermostat.powerSaving()).toEqual(true);
    })

    it("only allows max temperature of 25 degrees if power saving mode is on", function(){
    thermostat.up(20)
    expect(thermostat.temperature()).toEqual(25)
    })

    it("lets you reset the temperature to 20 degrees", function(){
    thermostat.up(20)
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20)
    })

    it("calculates current energy usage", function(){
    expect(thermostat.usage()).toEqual('medium-usage')
    })

    it("expects high usage above 25 degrees", function(){
    thermostat.up(20);
    expect(thermostat.usage()).toEqual('high-usage')
    })
});
