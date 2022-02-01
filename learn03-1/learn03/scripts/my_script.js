// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Josiah";

const taxRate = .07; // This is a constant
// myName = "Josiah Rivera" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Josiah",
        lastName = "Rivera";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Josiah",
        lastName = "Rivera";
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Scooby"
    document.getElementById("dog1-2").innerHTML = dog2;

}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 20 + 1;
    document.getElementById("addition").innerHTML = "20 + 1 = " + addition;
    let subtraction = 31 - 20;
    document.getElementById("subtraction").innerHTML = "31 - 20 = " + subtraction;
    let multiplication = 5 * 10;
    document.getElementById("multiplication").innerHTML = "5 * 10 = " + multiplication;
    let exponent = 3 ** 3;
    document.getElementById("exponent").innerHTML = "3 ** 3 = " + exponent;
    let division = 60 / 3;
    document.getElementById("division").innerHTML = "60 / 3 = " + division;
    let modulus = 8 % 3;
    document.getElementById("modulus").innerHTML = "8 % 3 = " + modulus;
    let increment = 4;
    document.getElementById("increment").innerHTML = "++4 = " + ++increment;
    let decrement = 10;
    document.getElementById("decrement").innerHTML = "--10 = " + --decrement;

}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10;
    document.getElementById("equals").innerHTML = "x = 10" + " x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1" + " x = " + x;
    x -= 4;
    document.getElementById("minus-equals").innerHTML = "x -= 4" + " x = " + x;
    x *= 3;
    document.getElementById("times-equals").innerHTML = "x *= 3" + " x = " + x;
    x /= 7;
    document.getElementById("divide-equals").innerHTML = "x /= 7" + " x = " + x;
    x %= 2;
    document.getElementById("modulus-equals").innerHTML = "x %= 2" + " x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Tabby", "Calico", "Tuxedo"];
    document.getElementById("array").innerHTML = cats;
    const person = {fName:"Josiah", lName:"Rivera", age:19}
    document.getElementById("object").innerHTML = person.fName + " " + person.lName + " " + person.age;

}
