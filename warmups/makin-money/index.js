function formatMoney(int){
    var arr = int.toString().split("");
    var cents = arr.splice(arr.length - 2, 2);
    var commas = [];
    while (arr.length > 3){
        commas.unshift(arr.splice(arr.length - 3, 3).join(""))
    }
    
    var money = "$" + arr.join("") + "," + commas.join(",") + "." + cents.join("");
    return money;
}

console.log(formatMoney(123456789));






//function money(num) {
//    var list = [];
//    for (var i = num.length; i >= 0; i--) {
//        //num[i].toString;
//        list.push(num[i]);
//    }
//    list.splice(3, 0, ".");
//    list.splice(list.length, 0, "$");
//    return list.reverse().join();
//};
//
//console.log(money("123456789"));