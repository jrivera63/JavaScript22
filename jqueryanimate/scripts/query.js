$(document).ready(function(){

    $("#left").click(function(){
        $("#object").animate({
            marginLeft: '-=15px'
        });
    });

    $("#right").click(function(){
        $("#object").animate({
            marginRight: '-=15px'
        });
    });

    $("#up").click(function(){
        $("#object").animate({
            marginTop: '-=15px'
        });
    });

    $("#down").click(function(){
        $("#object").animate({
            marginBottom: '-=15px'
        });
    });

    $("#farLeft").click(function(){
        $("#object").animate({
            marginLeft: '-=700px'
        }, 4000);
    });

    $("#farRight").click(function(){
        $("#object").animate({
            marginRight: '-=700px'
        }, 4000);
    });

    
    $("#stop").click(function(){
        $("#object").stop();
    });

    $("#disappear").click(function(){
        $("#object").hide("slow", function(){
            alert("The ball has disappeared!");
        });
    });

    $("#reappear").click(function(){
        $("#object").show("slow", function(){
            alert("The ball has reappeared!");
        });
    });

    $("#square").click(function(){
        $("#object")
        .animate({marginRight: "-=250px"}, 3000)
        .animate({marginTop: "-=250px"}, 3000)
        .animate({marginLeft: "-=250px"}, 3000)
        .animate({marginBottom: "-=250px"}, 3000)
        .animate({marginRight: "-=250px"}, 3000);

    });





});