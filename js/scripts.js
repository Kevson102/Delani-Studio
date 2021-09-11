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

  // hover for portfolio image 1
  $(".project1").mouseenter(function(){
    $(".image1").show();
    $(".project1").hide();
  });
  $(".image1").mouseleave(function(){
    $(".image1").hide();
    $(".project1").show();
  });

    // hover for portfolio image 2
  $(".project2").mouseenter(function(){
    $(".image2").show();
    $(".project2").hide();
  });
  $(".image2").mouseleave(function(){
    $(".image2").hide();
    $(".project2").show();
  });

    // hover for portfolio image 3
  $(".project3").mouseenter(function(){
    $(".image3").show();
    $(".project3").hide();
  });
  $(".image3").mouseleave(function(){
    $(".image3").hide();
    $(".project3").show();
  });

    // hover for portfolio image 4
  $(".project4").mouseenter(function(){
    $(".image4").show();
    $(".project4").hide();
  });
  $(".image4").mouseleave(function(){
    $(".image4").hide();
    $(".project4").show();
  });

    // hover for portfolio image 5
  $(".project5").mouseenter(function(){
    $(".image5").show();
    $(".project5").hide();
  });
  $(".image5").mouseleave(function(){
    $(".image5").hide();
    $(".project5").show();
  });

    // hover for portfolio image 6
  $(".project6").mouseenter(function(){
    $(".image6").show();
    $(".project6").hide();
  });
  $(".image6").mouseleave(function(){
    $(".image6").hide();
    $(".project6").show();
  });

    // hover for portfolio image 7
  $(".project7").mouseenter(function(){
    $(".image7").show();
    $(".project7").hide();
  });
  $(".image7").mouseleave(function(){
    $(".image7").hide();
    $(".project7").show();
  });

    // hover for portfolio image 8
  $(".project8").mouseenter(function(){
    $(".image8").show();
    $(".project8").hide();
  });
  $(".image8").mouseleave(function(){
    $(".image8").hide();
    $(".project8").show();
  });
});