//var input = 'bookkeeper larry';
//var letters = "";
//var extras = "";
//
//for(var i = 0; i < input.length; i++){
//    if(letters)

letters.push(input[i]);
//    for( var j = 0; j < letters.length; j++){
//        
//    }
//    
//}

function unique(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

console.log(
  unique('abcdab'),
  unique('aaabbc')
);