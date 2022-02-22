let randomNum = Math.floor(Math.random() * 1001);
let userGuess = '';
alert(randomNum);





function guessNumber(){
    userGuess = document.getElementById("guess").value;
    let difference = Math.abs((userGuess - randomNum));

    if (1000 >= difference && difference >= 800){
        document.getElementById("hotCold").style.color = "blue";
        document.getElementById("hotCold").innerHTML = "Coldest";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (799 >= difference && difference >= 600){
        document.getElementById("hotCold").style.color = "dodgerblue";
        document.getElementById("hotCold").innerHTML = "Colder";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (599 >= difference && difference>= 400){
        document.getElementById("hotCold").style.color = "aqua";
        document.getElementById("hotCold").innerHTML = "Cold";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (399 >= difference && difference >= 250){
        document.getElementById("hotCold").style.color = "orange";
        document.getElementById("hotCold").innerHTML = "Hot";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (249 >= difference && difference >= 100){
        document.getElementById("hotCold").style.color = "orangered";
        document.getElementById("hotCold").innerHTML = "Hotter";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (99 >= difference && difference >= 30){
        document.getElementById("hotCold").style.color = "red";
        document.getElementById("hotCold").innerHTML = "Hottest";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (29 >= difference && difference >= 1){
        document.getElementById("hotCold").style.color = "darkred";
        document.getElementById("hotCold").innerHTML = "On fire!";
        document.getElementById("number").innerHTML = "Try Again!";
    } else if (difference == 0){
        document.getElementById("hotCold").style.color = "lime";
        document.getElementById("hotCold").innerHTML = "You win!";
        document.getElementById("number").innerHTML = randomNum;
    }
};
   