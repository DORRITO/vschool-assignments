//function luckySum(a, b, c) {
//    var sum = [];
//    sum.push(a,b,c);
//    for(var i = 0; i < sum.length; i++) {
//        if (sum[i -1] === 13) {
//            sum.splice(sum[i -1], 2);
//        }
//        console.log(sum);
//    } 
//}
//luckySum(1,2,3);
//luckySum(1,13,3);

//////////////////////another way//////////
//function luckySum(a, b, c) {
//    var firstArr = [];
//    var finalArr = [];
//    firstArr.push(a,b,c);
//    for(var i = 0; i < firstArr.length; i++) {
//        if (firstArr[i] === 13) {
//            break;
//        } else {
//            finalArr.push(firstArr[i]);
//        }
//    }
//    console.log(sum(finalArr));
//}
//luckySum(1,2,3);
//luckySum(1,13,3);

////////////////////another way////////////
function luckySum(a, b, c) {
    var arr = []
    if( a !== 13 && b !== 13 && c !== 13) {
        return a + b + c;
    } else if(a === 13) {
        return "no sum!"
    } else if(b === 13) {
        return a;
    } else if(c === 13) {
        return a + b;
    } else {
        return "no sum!"
    }
}

console.log(luckySum(13,13,3));
console.log(luckySum(1,1,3));
console.log(luckySum(3,1,13));