//Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)
//
//fizzString("fig") → "Fizz"
//fizzString("dib") → "Buzz"
//fizzString("fib") → "FizzBuzz"

function fizzString(str) {
    
    if (str.slice(-1) === "b" && str[0] === "f") {
        console.log("FizzBuzz");
    } else if(str.slice(-1) === "b") {
        console.log("Buzz");
    } else if(str[0] === "f") {
        console.log("Fizz");
    }
};

fizzString("fig");
fizzString("dib");
fizzString("fib");