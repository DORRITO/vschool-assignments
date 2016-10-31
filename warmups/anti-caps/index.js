
function antiCaps(string) {
    var inverted = ''
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            inverted += string[i].toUpperCase();
        } else {
            inverted += string[i].toLowerCase();
        }
    }    
    return inverted;
}

console.log(antiCaps("HeeYooaAW"));