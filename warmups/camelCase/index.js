

var string ="hi there-people";
var newArr = [];

for(var i = 0; i < y.length; i++){	
    function check(string){
        for (var i = 0; i < string; i++) {
            if (string[i] === " " || string[i] === "-") {
                var cap = string[i + 1].toUpperCase();
                newArr.push(cap)
                i++;
            } else {
                newArr.push(string[i]);
            }
        }
    }

console.log(check(string));
    
/////////////////////////////another way     
//function camelCase(str) {
//    var letterArray = str.split('');
//    var newarr = [];
//    for (var i = 0; i < letterArray.length; i++) {
//        if (letterArray[i] === ' ' || letterArray[i] === '_' || letterArray[i] === '-') {
//            var cap = letterArray[i + 1].toUpperCase();
//            newarr.push(cap);
//            letterArray.splice(i, 1);
//        } else {
//            newarr.push(letterArray[i]);
//        }
//    }
//    return newarr.join("");
//}
//    console.log(camelCase("hello hi"));
//console.log(camelCase("hello-hi"));
//console.log(camelCase("hello_hi"));
    
//////////////////////another way
//function camelCase(string) {
//    var isDashSeparated = string.indexOf("-") > -1;
//    var isSpaceSeparated = string.indexOf(" ") > -1;
//    var isUnderscoreSeparated = string.indexOf("_") > -1;
//
//    if (isDashSeparated) {
//        var wordArray = string.split("-");
//    } else if (isSpaceSeparated) {
//        var wordArray = string.split(" ");
//    } else if (isUnderscoreSeparated) {
//        var wordArray = string.split("_");
//    }
//
//    var camelString = wordArray[0];
//
//    for (var i = 1; i < wordArray.length; i++) {
//        var word = wordArray[i].toLowerCase();
//        camelString += word.substring(0, 1).toUpperCase() + word.substring(1);
//    }
//    return camelString;
//}
//
////["this", "is", "dash", "separated".substring(2,4)];
//
//console.log(camelCase("this-iS-dAsh-SEParAted"));
//console.log(camelCase("this_is_underscore_separated"));
//console.log(camelCase("this is space separated"));