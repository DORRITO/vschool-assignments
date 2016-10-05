function askNumber(num1,num2){
    if(num1 > num2){
        console.log(num2);
    }
    else if(num2 > num1){
        console.log(num1);
    } else {
        console.log("Thats the same number!");
   }

}
askNumber(prompt("What is #1?"), prompt("What is #2?"))
///////////////////////////////

var trouble = console.log("We are in trouble");
function monkSmile(aSmile, bSmile){
    if(aSmile && bSmile || !aSmile && !bSmile){
        console.log(trouble);
    } else {
        console.log("We're safe");
    }
}
monkSmile(false,true)
////////////////////////////
var date = new Date();
var time = date.getHours();

function greet(){
    if (time <= 11){
        console.log("Morning");
    }
    else if(time < 11 &&  time >= 17){
        console.log("Afternoon");
    } else {
        console.log("Good Evenening");
    }
}
greet()