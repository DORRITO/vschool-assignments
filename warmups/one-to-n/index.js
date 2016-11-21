//program that finds the sum of all the even squares from 1 to n

function evenSquare(num) {
    var newSum =0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            newSum += (i * i);
        }
    }
    console.log(newSum);
    return newSum;
};

var num1 = 2;
var num2 = 5;
var num3 = 8;

evenSquareSum(num1);
evenSquareSum(num2);
evenSquareSum(num3);