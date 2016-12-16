//create function to reach the next level
function reachNextLevel(experience, threshold, reward) {
    //add reward to experience
    var XP = experience + reward;
    //check if reward + experience = threshold
    //if so, return true, else false.
    if (XP >= threshold) {      
        return true;
    } else {
        return false;
    }
}
//call the funciton
console.log(reachNextLevel(10, 15, 5));

//////////////////////////////////


//function to take a string and reverse it

function reversed(toReverse) {
    newArr = [];
    for (var i = 0; i < toReverse.length; i++) {
        newArr.push(toReverse[i])
    }
    var reversedStr = newArr.reverse().join('');
    
    return reversedStr;
}

console.log(reversed("hello"));