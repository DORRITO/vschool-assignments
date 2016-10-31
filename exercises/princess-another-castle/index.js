var howManyActions = 3;

//make an object named player with properties
var player = {
    name: "toad",
    totalCoins: 10,
    status: "Small",
    star: false,
    setName: function(namePicked) {
        if (namePicked.toLowerCase() === "mario") {
            this.name = "Mario";
        } else {
            this.name = "Luigi";
        }
    },
    gotHit: function() {
        switch (player.status){
            case "powered up":
                this.status = "big";
                break;
            case "big":
                this.status = "small";
                break;
            default:
                this.status = "dead";
                this.gameActive = false;
        }
    },
    gotPowerUp: function(powerUp) {
        if (this.status === "Big") {
            this.status = "poweredUp";
        } else if (this.status === "small") {
            this.status = "big";
        }
    },
    gameActive: true,
    addCoin: function() {
        this.totalCoins++
    },
    print: function() {
        console.log(this.name);
        console.log(this.totalCoins);
        console.log(this.status);
        console.log(this.star);
    }   
}

//create a random range function that returns 0, 1, or 2.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doAction() {
    switch(getRandomInt(0, 2)) {
        case 0:
            player.gotHit();
            break;
        case 1:
            player.powerUp;
            break;
        case 2:
            player.addCoin();
    }
}

for (var i = 0; i < 3; i++) {
    doAction()
}

player.print()