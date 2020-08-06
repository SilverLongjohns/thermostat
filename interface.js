$(document).ready(function() {

  thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $("#raise-temp").click(function(){
    thermostat.upTemp()
    $("#temperature").text(thermostat.temperature);
  });

  $("#lower-temp").click(function(){
    thermostat.downTemp()
    $("#temperature").text(thermostat.temperature);
  });
});