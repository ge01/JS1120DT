/*
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object
*/

var x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;

var x = "Volvo" + 16;
document.getElementById("demo1").innerHTML = x;

var x = 16 + 4 + "Volvo";
document.getElementById("demo2").innerHTML = x;

var x = "Volvo" + 16 + 4;
document.getElementById("demo3").innerHTML = x;
