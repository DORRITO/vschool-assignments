// Main object
function Army(name) {
    this.population = 1000000;
    this.name = name
}
// global variable
var penguins = new Army("penguins");
var communist = new Army("communist");
var toss = flip();

if (toss === 1) {
    sendNuke(communist, onHit, onMiss);
} else {
    sendNuke(penguins, onHit, onMiss);
};

///////// functions

function flip() {
    return Math.floor(Math.random() * 2) + 1;
}

function nukeHit() {
    return Math.floor(Math.random() * (1000000 - 200000 + 1) + 200000);
}

function onHit(party) {
    var damage = nukeHit();
    party.population -= damage;
    console.log("The nuke landed and did " + damage + " damage!");
}

function onMiss(party) {
    console.log("The missile landed in the water near the " + party.name + " land.");
}

function sendNuke(party, onHit, onMiss) {
    var hitOrMiss = flip();
    console.log("\nMissile firing at the " + party.name + "!");
    //setInterval(function(){ console.log("."); }, 1000);
    
    if (hitOrMiss === 2) {
        onHit(party);
    } else {
        onMiss(party);
    }
    /////end battle
    if (party.population <= 0) {
        console.log("\nThe " + party.name + " have been destroyed!");
        return;
    }
    ///
    if (party === communist) {
        sendNuke(penguins, onHit, onMiss);
    } else {
        sendNuke(communist, onHit, onMiss);
    }
}
