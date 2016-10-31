function noTeenSum(a, b, c) {
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
}
        
function fixTeen(n) {
    if (n === 15 || n === 16) {
        return n;
    }
    else if ( n >= 13 && n <= 19) {
        return 0;
    } else {
        return n;
    }
}

console.log(noTeenSum(15, 13, 8));