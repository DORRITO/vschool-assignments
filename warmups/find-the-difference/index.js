array1 = [1, 2, 3, 7, 9, "Belly", 20];
array2 = [2, 3, 4, 8, 10, "jelly"];
function uniqueArray (a, b) {
    //combine arrays and make one array
    var newArray = a.concat(b);
    newArray.sort();
    console.log("newArray ", newArray);
    //filter out duplicates and push to new array
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] === newArray[i + 1]) {
            newArray.splice(i, 1);
            i -= 1;
        }
    }
    console.log(newArray);
};
uniqueArray(array1, array2);

/////// another way ///////////////////
//var arrA = [1, 2, 3, 7, 9, “Belly”, 20]
//var arrB = [2, 3, 4, 8, 10, “jelly”]
//
//function findUnique(arr1, arr2) {
//
//    var input = arr1.concat(arr2);
//    
//    var uniqueArray = [];
//    var repeatArray = [];
//    
//    for (var i = 0; i < input.length; i++) {
//        if(uniqueArray.indexOf(input[i]) === -1) {
//            uniqueArray.push(input[i]);
//        } else {
//            repeatArray.push(input[i]);
//            //uniqueArray.splice(uniqueArray.indexOf(input[i]), 1);
//        }
//    }
//    return uniqueArray;
//}
//console.log(findUnique(arrA, aarB));
