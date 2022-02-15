function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Josiah Rivera"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let numString = 10 + "40";
    document.getElementById("add").innerHTML = "10 + \"40\" = " + numString;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num1 = 50;
    document.getElementById("to-string").innerHTML = num1.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let num2 = 50.3432434;
    document.getElementById("exponent").innerHTML = num2.toExponential(2);
    


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let num3 = 23.4282382;
    document.getElementById("fixed").innerHTML = num3.toFixed(3);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let num4 = 2.302930;
    document.getElementById("precision").innerHTML = num4.toPrecision(4);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let num5 = "44 cats";
    document.getElementById("float").innerHTML = parseFloat(num5);

    // Demonstrate the use of parseInt() and print to the int paragraph
    let num6 = "9 cats";
    document.getElementById("int").innerHTML = parseInt(num6);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "Using == will convert two different elements to the same data type before actually making the comparison, whereas === will compare the two elements the way they are, even if they are different data types.";


    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "Using multiple and/or statements in one line will result in JS looking at the && statement first, and determining true/false before moving on to the 'or' statement. && is determined before ||";



    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
        let var1 = "Hello";
        switch (var1){
            case "Hi":
                document.getElementById("switch").innerHTML = "Var1 says hi";
                break;
            case "Hello":
                document.getElementById("switch").innerHTML = "Var1 says hello";
                break;
            default:
                document.getElementById("switch").innerHTML = "Var1 says nothing";
                break;
        }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
        let favColor = "blue";
        let shirt = favColor === "red" ? "I want the red shirt" : "I want a different color shirt";
        document.getElementById("ternary").innerHTML = shirt;
}