var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var userName = readlineSync.question('\nMay I have your name? ');

console.log('Hi ' + userName.toUpperCase() + '!');
console.log("oops, didn't mean to yell.  Your name having " + userName.length + " characters in it threw me off.\n");

var long = readlineSync.question("Tell me a long story. ");

var halfStr = ""
if (long.length > 20) {
    for(var i = 0; i < long.length / 2; i++) {
        halfStr += long[i];
    }
    console.log("\nWhoa, that was long.  All I got was \"" + halfStr + "\"");
} else {
    console.log("\nThat was a good story.");
}

var start = Number(readlineSync.question("Let's try again, choose a number so I can try to remember the story.  It was somewhere around " + long.length + " characters long."));

for(var i = start; start < long; i++){
    halfStr += long[i];
}
console.log("\n" + halfStr);


