
//function add(a, b){
//    return (a + b);
//}
///////////////////////  problem 2
//
//function largest(a, b, c){
//    if(a > b && a > c){
//        return a;
//    }
//    else if(b > a && b > c){
//        return b;
//    } else {
//        return c;
//    }
//};
//console.log(largest(1,23,3));
/////////////////////////////// problem 3
//
//function isEven(testNum){
//    if(testNum % 2 === 0){
//        return "even";
//    } else {
//        return "odd";
//    }
//}
//////////////////////////// problem 4
var s = ''
function length(str){
    if(str.length <= 20){
        return(str + str);
    } else {
        var half = str.length / 2;
        var halfStr = '';
        for(var i = 0; i < half; i++){
            s+= str[i];
        }
        return s;
    }
}
console.log(length('kuwati mundi is the best thing in the whole wide world'));