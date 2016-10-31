var ask = require('readline-sync');  
var game = true;

var inventory = [];
var health = 10;

//The adventure begins here
console.log("\nWelcome to a random forest that you just happen to be teleported into!");

var name = ask.question("What is your name? ");

console.log("\nOk " + name + ". It looks like the only way outta here is to walk forward by pressing w.\n");

while (game === true) {
    
    var walk = ask.question("Please enter 'w' or 'print' to see your status. ");
        if (walk.toLowerCase() === "print") {
        console.log("\n"+ name + " you have " + health + " health, and " + inventory[0] + " in your inventory\n");
    }
    while (walk !== "w") {
        
        var walk = ask.question("Ain't no sunshine when she's gone, and ain't no sunshine if you don't leave this forest.  Enter w! ");
    }
    
        if (getRandom() <= .333) {
            var eName = enemyName();
            console.log("\nA wild " + eName + " appears!");
   
            var attackOrRun = ask.question("Attack or run? ");
        
            if (attackOrRun === "attack") {
                console.log("\nYou attack!");            
                if (getRandom() <= .499) {
                    fail()
                } else {
                    health += 2;
                    inventory.push("'new sword'");
                    console.log("You defeated it! You gain 2 health and a nifty item.");    
                }                       
            } else {
                if (getRandom() <= .499) {
                    fail()
                } else {
                console.log("\nrun awayyyyyy!");
                }
            }
        } else {
            console.log("\nYou keep heading to where you think the exit might be.\n");
        }   
        if(inventory.length >= 2) {
            console.log("\nCongratulations, you escaped!")
            game = false;
        }
}

///////////////////// functions
function getRandom() {
  return Math.random();
}

function enemyName(){
    var enemyRoll = getRandom();
    if (enemyRoll <= .333) {
        return "Troll"
    }
    else if (enemyRoll <= .667) {
        return "Goblin";
    } else {
        return "Turle";
    }
}

function attack() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

function fail() {
    var enemyHit = attack()
    health -= enemyHit;
    console.log("...and fail. " + eName + " hits you for " + enemyHit + " hp and you have " + health + " hp left.");

    if (health <= 0) {
        console.log("You gone.");
        game = false;
    }
}