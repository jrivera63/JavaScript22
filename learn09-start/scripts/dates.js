/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let a = new Date();
document.getElementById("basic").innerHTML = a;



// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let b = new Date(2022, 1, 21);
document.getElementById("today").innerHTML = b;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let c = new Date("October 19, 2002");
document.getElementById("birthday").innerHTML = c;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = a.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let d = new Date("2012-06");
document.getElementById("date1").innerHTML = d;
let e = new Date("12/09/2005");
document.getElementById("date2").innerHTML = e;
let f = new Date("2010");
document.getElementById("date3").innerHTML = f;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = a.getFullYear();
document.getElementById("get2").innerHTML = a.getDay();
document.getElementById("get3").innerHTML = a.getMinutes();
document.getElementById("get4").innerHTML = a.getUTCDate();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const g = new Date();
g.setFullYear(2007);
document.getElementById("set1").innerHTML = g;
const h = new Date();
h.setDate(13);
document.getElementById("set2").innerHTML = h;
const i = new Date();
i.setMinutes(45);
document.getElementById("set3").innerHTML = i;
const j = new Date();
j.setMonth(9);
document.getElementById("set4").innerHTML = j;