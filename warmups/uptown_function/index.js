var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

///////////////////////////////////// 1st function (could have used join)

//var s = '';
//function lyricList(list){
//    for(i = 0; i < list.length; i++){
//        s += list[i] + " ";
//    }
//    console.log(s);
//}
//lyricList(lyrics);
/////////////////////////////////////// 2nd function
//function lyricList(list){
//    list.reverse();
//    console.log(list.join(" "));
//}
//lyricList(lyrics);
//////////////////////////////// 3rd function
function lyricList(list){
    var s = '';
    for (var i = 0; i < list.length; i++){
        if (i === 0 || i % 2 === 0){
            s += list[i] + " ";
        }
    }
    console.log(s);
}
lyricList(lyrics);