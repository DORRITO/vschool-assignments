function sortStuff(array, bool) {
    var newArray = array.sort(function (a, b) {
        var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB)
            return 1;
        return 0;
    });
    if(bool) {
       return newArray;
    } else {
        newArray.reverse();
        return newArray;
    }
}
var test = sortStuff(arrayOfObjects, true);
console.log(test);