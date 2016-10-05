//var readline = require("readline-sync");
//var name = readline.question("What is your name ")
//console.log(name);
//////////////////////////////////////////////  part 1
//
//var readline = require("readline-sync");
//var name = readline.question("What is your name? ");
//for(var i = 0; i < name.length; i++){
//    console.log(name[i]);
//}
////////////////////////////////////////////  part 2

var readline = require("readline-sync");
var name = readline.question("What is your name?: ");
var newChar = readline.question("Enter a new character: ");
var foundChar = false;
var indexOfChar;
for(var i = 0; i < name.length; i++){
    if(newChar === name[i]){
        foundChar = true;
        indexOfChar = i;
        break;
    } else {
        console
    }
}
if(foundChar){
    console.log(indexOfChar);
} else {
    console.log("character isn't there!");
}

//////////////////////////////////////////// part 3

//var readline = require("readline-sync");
//var num
//while(num !== "42"){
//    num = readline.question("What is the meaning of life?: ");
//}
///////////////////////////////////////////// part 4
//var readline = require("readline-sync");
//var list = [];
//var small = Infinity;
//while (list.length < 10){
//    var addList = Number(readline.question("Pick a number: "));
//    list.push(addList);
//}
//for(var i = 0; i < list.length; i++){
//    if(list[i] < small){
//        small = list[i];
//    }
//}
//console.log(small);
/////////////////////////////////////////