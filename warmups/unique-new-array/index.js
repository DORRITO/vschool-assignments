//Array to concatinate arrays and get rid of duplicates
function arrayUnique(array1, array2) {
    var list1 = array1.concat(array2);
    for(var i = 0; i < list1.length; ++i) {
        for(var j= i + 1; j < list1.length; ++j) {
            if(list1[i] === list1[j])
                list1.splice(j--, 1);
        }
    }

    return list1;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
    // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));







//Array.prototype.newArry = function() {
//    var list1 = this.concat();
//    for(var i = 0; i < list1.length; i++) {
//        for(var j = i+1; j < a.length; j++) {
//            if(a[i] === a[j])
//                a.splice(j--, 1);
//        }
//    }
//    
//    return list1;
//}