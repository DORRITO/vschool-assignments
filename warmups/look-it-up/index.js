//create a dictionary object
var dictionary = {
    hello: "hi"
};

//allow the user to enter add items to the dictionary
function addItem(word, definition) {
    if (word === dictionary.word) {
        console.log("thats already in there");
    } else {
        dictionary[word] = definition;
    }
}

//allow the user to look up definitions
function read(word){
    console.log(dictionary[word]);
}


//readline sync version
//var readlineSync = require('readline-sync');
//var wordDictionary = {};
//while (true) {
//    var userSelection = readlineSync.question('Please type a 1 to create a new word, 2 to see your dictionary, or 3 to quit: ');
//    if (userSelection === '1') {
//
//        var userWord = readlineSync.question('Please type a word that you would like to define: ');
//        if(!(userWord in wordDictionary)){
//            wordDictionary[userWord] = readlineSync.question('Please type the definition of ' + userWord + ':');
//        } else {
//          console.log("that word is already in the dictionary");
//          continue;
//        }
//    } else if (userSelection === '2') {
//        var userWord = readlineSync.question('Please type a word that you would like to look up: ');
//        console.log(wordDictionary[userWord])
//    } else {
//        break;
//    }
//}