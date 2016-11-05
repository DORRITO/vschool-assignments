//make a function to take an array and return ints, strings, arrays, objects.
function objArray(arr) {
    var intArr = []
    var strArr = []
    var arrArr = []
    var objArr = []
    var finalObj = {}
    
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            intArr.push(arr[i]);
        } else if (typeof arr[i] === 'string') {
            strArr.push(arr[i]);
        } else if (Array.isArray(arr[i])) {
            arrArr.push(arr[i]);
        } else if (typeof arr[i] === 'object') {
            objArr.push(arr[i]);
        }
    }
    finalObj.numbers = intArr;
    finalObj.strings = strArr;
    finalObj.arrays = arrArr;
    finalObj.objects = objArr;
    
    return finalObj;
}
console.log(objArray([1, 2, 3, ["list"], "Hello string", {obj: "value"}]));