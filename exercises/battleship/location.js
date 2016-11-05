function determineIfShip() {
    var random = Math.floor(Math.random() * 5);
    return random === 4;
}

function Location() {
    this.isShip = determineIfShip();
    this.hit = null;
    this.display = "~";
}

module.exports = Location;
