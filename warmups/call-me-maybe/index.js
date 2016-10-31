var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

/////////////////////actual program

for (var i = 0; i < names.length; i++) {

    attemptCall(names[i], dontCall(names[i]), call(names[i]), aDouble(names[i]));
}
//////////////////////

function attemptCall(name, dontCall, call, sendText) {
    if (sendText === true) {
            console.log("Send text");
        }
    else if (dontCall === true) {
        console.log("Don't call");       
    }
    else if (call === true) {
        console.log("Call");
    }
}
//checks if there are two a's in a string.   
function aDouble(name) {
    aCount = 0;
    for (var j = 0; j < name.length; j++) {
        if (name.toLowerCase()[j] === "a") {
            aCount += 1;
        } 
    }
    if (aCount >= 2) {
        return true;
    } else {
        return false;
    }
}

function call(name) {
    if (name.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function dontCall(name) {
    if (name.length % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
    