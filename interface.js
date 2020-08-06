$(document).ready(function() {

  thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $("#power-status").text(thermostat.powerSaving);

  $("#raise-temp").click(function(){
    thermostat.upTemp()
    $("#temperature").text(thermostat.temperature);
  });

  $("#lower-temp").click(function(){
    thermostat.downTemp()
    $("#temperature").text(thermostat.temperature);
  });

  $("#reset").click(function(){
    thermostat.reset()
    $("#temperature").text(thermostat.temperature);
  });

  $("#power-saving").click(function(){
    thermostat.powerSave()
    $("#power-status").text(thermostat.powerSaving);
  });
});