var star = "Starhasd"

function palindrome(word) {
    str1 = '';
    str2 = '';
    for (var i = 0; i < word.length; i++) {
        str1 += word[i];
        str2 += word[i];
    }
    str1 = str1.split('!').join('').toLowerCase();
    str2 = str1.reverse();

    if(str1 === str2) {
        console.log("It's a palindrome!");
    } else {
        console.log ("It's not a palindrome.")
    }
};

console.log(palindrome(star));