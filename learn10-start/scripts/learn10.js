function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    document.getElementById("round").innerHTML = Math.round(50.4);
    document.getElementById("ceil").innerHTML = Math.ceil(23.1);
    document.getElementById("floor").innerHTML = Math.floor(42.9);
    document.getElementById("trunc").innerHTML = Math.trunc(123.38478347837438473847);
    document.getElementById("sign").innerHTML = Math.sign(-2323);
    document.getElementById("pow").innerHTML = Math.pow(5, 3);
    document.getElementById("min").innerHTML = Math.min(12, 232, -23, -3, -400);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    let randNum = Math.floor(Math.random() * 101);
    document.getElementById("random2").innerHTML = randNum;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    
    document.getElementById("comparisons").innerHTML = "== tests to see if the values are equal, even if the data types are different. === tests to see if the value AND date types are equal."


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}