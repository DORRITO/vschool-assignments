console.log(checkArr([1, 1, 2, 3, 1]));
    

//creat a function that takes an array of int
function checkArr(arr) {
    //loop over array
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] === 1 && arr[i+1] === 2 && arr[i+2] === 3) {
            return true;
        }
    }
    return false;
}