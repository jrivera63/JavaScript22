// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

var lyrics = '';
for (let b = 99; b > 0; b--) {

    if (b > 1 && b != 2){
        lyrics += b + ' bottles of beer on the wall,<br>' + b + " bottles of beer,<br>" + "Take one down, pass it around <br>" + (b-1) + " bottles of beer on the wall<br><br>";
    } else if (b == 2){
        lyrics += b + ' bottles of beer on the wall,<br>' + b + " bottles of beer,<br>" + "Take one down, pass it around <br>" + (b-1) + " bottle of beer on the wall<br><br>";
    } else if (b == 1){
        lyrics += b + ' bottle of beer on the wall,<br>' + b + " bottle of beer,<br>" + "Take one down, pass it around <br>" + (b-1) + " bottles of beer on the wall<br><br>";
    };

    document.getElementById('beer').innerHTML = lyrics;
}
    
    //document.getElementById('beer').innerHTML = lyrics;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

let monthsArray = ["January", " February", " March", " April", " May", " June", " July", " August", " September", " October", " November", " December"];

for (let m in monthsArray){
    document.getElementById("for-in").innerHTML += monthsArray[m];
}



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
var stringVar = "ScoobyDoo";
 for (var x of stringVar){
    document.getElementById("for-of").innerHTML += x + '<br>';
 }



// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
var number = 1;

while(number <= 50){
    document.getElementById('while').innerHTML += number + ' ';
    number++;
}