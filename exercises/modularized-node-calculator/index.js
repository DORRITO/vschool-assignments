var add = require("./add");
var subtract = require("./subtract");
var mult = require("./mult");
var div = require("./div");
var exponential = require("./exponential");

function math(num1, num2, string) {
    num1 = Number(num1);
    num2 = Number(num1);
    console.log(num1, num2, string);
    switch(string) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "x":
            mult(num1, num2);
            break;
        case "/":
            div(num1,num2);
            break
        default:
            console.log("Pick a math sign")
            break;
    }
}
math(1, 2, "+")