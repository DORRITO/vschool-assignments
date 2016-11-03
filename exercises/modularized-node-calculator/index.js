var add = require("./add");
var subtract = require("./subtract");
var mult = require("./mult");
var div = require("./div");
var exponential = require("./exponential");

function math(num1, num2, string) {
    num1 = Number(num1);
    num2 = Number(num1);
    console.log(num1, num2, string);
}
math(1, 2, "hi");