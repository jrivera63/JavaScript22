$(document).ready(function(){

  $("#show").click(function(){
    $("#text1").show();
  });

  $("#hide").click(function(){
    $("#text1").hide();
  });

  $("#slide").click(function(){
    $("#text2").slideToggle();
  });

  $("#fade").click(function(){
    $("#text3").fadeToggle(2000);
  });

});