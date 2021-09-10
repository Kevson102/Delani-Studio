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
  $(".project8").hover(function(){
    $(this).css ("opacity", "0.5")
  }, function(){
    $(this).css("opacity", "1")
  });
});