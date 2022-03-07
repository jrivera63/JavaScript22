/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const games = ["Final Fantasy Tactics", "Strangers of Paradise", "Dead Island", "Smite", "Elden Ring"];

var text = "";
for (const g of games){
    text += g + "<br>";
    document.getElementById('list').innerHTML = text;
}





/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Loco", "Incomprendido", "Juanito Alimana", "El Retrato de Mama", "El Dia de mi Suerte"]);
var textSong = "";
for (const s of songs){
    textSong += s + "<br>";
    document.getElementById('set1').innerHTML = textSong;
}



// add two more songs to the set then display in the set2 paragraph
songs.add("Yo Visto Asi");
songs.add("Periodico de Ayer");
var textSong2 = "";
for (const s of songs){
    textSong2 += s + "<br>";
    document.getElementById('set2').innerHTML = textSong2;
}





/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const names = new Map([
    ["Jimmy", "jimmy@gmail.com"],
    ["Susana", "susana123@gmail.com"],
    ["Scooby Doo", "ruhrohraggy@gmail.com"],
    ["Hector", "hectorlavoz@gmail.com"],
    ["Maria", "maria1998@gmail.com"]
])

let textName = "";
names.forEach (function(value, key) {
    textName += key + "'s email is: " + value + "<br>";
    document.getElementById("map1").innerHTML = textName;
});



// add two new names and emails and display in map2 use the forEach() method

names.set("David", "david321@gmail.com");
names.set("Jessica", "jess9@gmail.com");

let textName2 = "";
names.forEach (function(value, key) {
    textName2 += key + "'s email is: " + value + "<br>";
    document.getElementById("map2").innerHTML = textName2;
});



// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = names.get("Scooby Doo");