//remove vowels from a string

function noVowels(str) {
    return str.replace(/[aeiou]/gi, '')
}

console.log(noVowels("hello there I hate mornings AEIOU"));

//could also use a for loop.  Loop through, make a new string inluding all characters except for the vowels.