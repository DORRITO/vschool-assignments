var ask = require('readline-sync');  
var game = true;

//The adventure begins here
console.log("\nWelcome to a random forest that you just happen to be teleported into!");

var name = ask.question("What is your name? ");

console.log("\nOk " + name + ". It looks like the only way outta here is to walk forward by pressing w.\n")


while(game === true){
    
    var walk = ask.question("Please enter w. ");
    while(walk !== "w"){
        var walk = ask.question("ain't no sunshine when she's gone, and ain't no sunshine if we don't leave this forest.  Enter w! ");
    }
    
    if (getRandom() <= .333) {
        console.log("hi")
        
    }
    game = false;
}


///////////////////// functions
function getRandom() {
  return Math.random();
}
