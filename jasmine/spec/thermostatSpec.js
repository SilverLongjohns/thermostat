describe("Thermostat", function(){
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe("Temperature", function(){
    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20)
    });
    it("can be increased", function(){
      thermostat.upTemp();
      expect(thermostat.temperature).toEqual(21)
    });
    it("can be lowered", function(){
      thermostat.downTemp();
      expect(thermostat.temperature).toEqual(19)
    });
    it("cannot go lower than 10 degrees", function(){
      var i;
      for (i = 0; i <= 10; i++){
      thermostat.downTemp();
      }
      expect(thermostat.temperature).toEqual(10)
    });
    it("cannot go higher than 32 degrees when powersaving is off", function(){
      thermostat.powerSave();

      var i;
      for (i = 0; i <= 15; i++){
        thermostat.upTemp();
      }

      expect(thermostat.temperature).toEqual(32)
    });

    it("can be reset to 20", function(){
      var i;
      for (i = 0; i <= 15; i++){
        thermostat.upTemp();
      }

      thermostat.reset();

      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe("Power Saving", function(){
    it("starts on", function(){
      expect(thermostat.powerSaving).toEqual(true)
    });

    it("can be switched off", function(){
      thermostat.powerSave()
      expect(thermostat.powerSaving).toEqual(false)
    });

    it("prevents the temperature from going above 25 degrees", function(){
      var i;
      for (i = 0; i <= 15; i++){
        thermostat.upTemp();
      }

      expect(thermostat.temperature).toEqual(25)
    });
  });
  describe("Power usage", function(){
    it("knows when power usage is low", function(){
      var i;
      for (i = 0; i <= 3; i++){
        thermostat.downTemp();
      }

      expect(thermostat.powerUsage()).toEqual("low-usage")
    });
    it("knows when power usage is nominal", function(){
      expect(thermostat.powerUsage()).toEqual("medium-usage")
    });
    it("knows when power usage is high", function(){
      thermostat.powerSave();

      var i;
      for (i = 0; i <= 7; i++){
        thermostat.upTemp();
      }
      expect(thermostat.powerUsage()).toEqual("high-usage")
    })
  });
});