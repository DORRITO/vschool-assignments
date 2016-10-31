function check(string){
    for (var i = 0; i < string.length ; i++)
        if (string[i + 1] !== string[i]){
            console.log(string[i +1]);
        } else {
            continue;
        }
}

check("llllllllli");