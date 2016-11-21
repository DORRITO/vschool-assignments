//Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
function loneSum(int1, int2, int3) {
    
    var sumArr = [int1, int2, int3];
    var sum = 0;
    
    if(int1 !== int2 && int1 !== int3) {
        sum += int1;
    }
    
    if(int2 !== int1 && int2 !== int3) {
        sum += int2;
    }
    
    if(int3 !== int2 && int3 !== int1) {
        sum += int3;
    }
    
    return sum;
};

console.log(loneSum(1,2,3));
console.log(loneSum(2,2,3));
console.log(loneSum(1,3,3));