var hundred = []


//create constructor
function Enemy(type, hitPoints, defense) {
    this.type = randomEnemy();
    this.hitPoints = enemyHP(this.type);
    this.defense = this.hitPoints * 3;
}

//actual program
for (var i = 0; i < 100; i++) {
    hundred.push(new Enemy);
}
console.log(hundred);

//to make a random enemy
function randomEnemy() {
    var enemy = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var chance = Math.floor(Math.random() * 3);
    return enemy[chance]; 
    }

//determine the random enemies hp
function enemyHP(rEnemy){
    var hp;
    if (rEnemy === "Ancient Dragon") {
        hp = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    }
    else if (rEnemy === "Prowler") {
        hp = Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else {
        hp = Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    }
    return hp;
}
