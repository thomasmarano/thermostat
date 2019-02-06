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
      thermostat.up();
      expect(thermostat.temperature()).toBeGreaterThan(x);
    });

    it('lets you decrease the temperature with a down function', function(){
      var y = thermostat.temperature();
      thermostat.down();
      expect(thermostat.temperature()).toBeLessThan(y);
    });

    it('raises an error if user treis to put temperature below 10 degrees', function(){


    })
});


//
// it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
//     var pi = 3.1415926,
//       e = 2.78;
//
//     expect(pi).toBeGreaterThan(e);
//     expect(e).not.toBeGreaterThan(pi);
//   });


// Thermostat starts at 20 degrees
//  You can increase the temperature with an up function
// You can decrease the temperature with a down function
// The minimum temperature is 10 degrees


// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
