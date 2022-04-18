$(document).ready(function(){

  // jQuery methods go here...
  $("#darkmode").click(function(){
    $("body").addClass("dark");
    $("header, .character-container").addClass("dark-red");
    $("#characters").addClass("red-text");
  });

  $("#lightmode").click(function(){
    $("body").removeClass("dark");
    $("header, .character-container").removeClass("dark-red");
    $("#characters").removeClass("red-text");
  });

  $("#largefont").click(function(){
      $("h2, h1, p").css("fontSize", "+=3");
  });

  $("#smallfont").click(function(){
      $("h2, h1, p").css("fontSize", "-=3");
  });

  $("#submit").click(function(){
      event.preventDefault();

    var line = $("#name").val();
    line = line + " is a(n) " + $("#race").val() + " ";
    line = line + $("#class").val() + " ";
    line = line + "who wields a " + $("#weapon").val() + " ";
    line = line + "and travels with their sidekick, " + $("#sidekick").val() + "." + "<br>";
    $("#characters").append(line);
    $("#name").val("");
    $("#weapon").val("");
    $("#class").val("");
    $("#sidekick").val("");
    $("#race").val("");
  });
  
});