$(document).ready(function(){
  $(".design").click(function(){
    $("#design-text").toggle();
    $("#design").toggle();
  });
  $(".development").click(function(){
    $("#development-text").toggle();
    $("#development").toggle();
  });
  $(".management").click(function(){
    $("#management-text").toggle();
    $("#management").toggle();
  });
});