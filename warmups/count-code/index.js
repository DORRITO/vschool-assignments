function countCode(str){
    var num = 0
    for(var i = 0; i < str.length - 3; i++){
      if(str[i] + str[i+1] + str[i +3] ==='coe'){
          num++
      } 
    }
    return num;
}

countCode("aaacodebbb");