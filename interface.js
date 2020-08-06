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

  var api = "https://api.openweathermap.org/data/2.5/weather?q="
  var city = "London"
  var units = "&units=metric"
  var apiid = "&appid=cd727585689ebbf6618381737fc23e2c"

  $.get( api + city + units + apiid, function( response ){
  var main = response["main"]  
  $("#city-temp").text(main["temp"]);
  });

  $("#cities").change(function() {
    var api = "https://api.openweathermap.org/data/2.5/weather?q="
    var units = "&units=metric"
    var apiid = "&appid=cd727585689ebbf6618381737fc23e2c"
    var city = $("#cities").val();
    $.get( api + city + units + apiid, function( response ){
      var main = response["main"]  
      $("#city-temp").text(main["temp"]);
    });
  });
});