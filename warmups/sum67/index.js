//Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
//sum67([1, 2, 2]) → 5
//sum67([1, 2, 2, 6, 99, 99, 7]) → 5
//sum67([1, 1, 6, 7, 2]) → 4

//function to take an array
function sum67(arr) {
    var sum = 0
    var sixSev = false;
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 6) {
            sixSev = true;
            continue;
        } else if (arr[i] === 7 && sixSev === true) {
            sixSev = false;
            continue;
        } else if (sixSev === false) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sum67([1, 1, 6, 7, 2]));
console.log(sum67([1, 2, 2, 6, 99, 99, 7, 100]));
console.log(sum67([1, 2, 2]));