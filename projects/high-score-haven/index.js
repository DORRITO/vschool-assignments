//list to use in taunts
var list = ["I'm too good!",  "You're bad."];
//When the user clicks a button, activate a function that takes their
//info and prints it to the screen.
function highScore() {

    var name = $( "#name" ).val();
    var game = $( "#game" ).val();
    var date = $( "#date" ).val();
    var score = $( "#score" ).val();
    var talk = $( "#trashTalk").is(":checked");
    
    //Add a new table
    if (talk === true){
        //determine which taunt to use through random function
        var taunt = ""
        if (random() <= .49) {
            taunt += list[0];
        } else {
            taunt += list[1];
        }

        $( "#tables" ).append(
            "<table>" + 
            "<tr><td>" + "Name: " + name + "</td></tr>" +
            "<tr><td>" + "\nGame: " + game + "</td></tr>" +
            "<tr><td>" + "\nDate: " + date + "</td></tr>" +
            "<tr><td>" + "\nScore: " +  score + "</td></tr>" +
            "<tr><td>" + taunt + "</td></tr>" +
            //"Adsadas   random list
            "</table>");
    } else {
        $( "#tables" ).append(
            "<table>" + 
            "<tr><td>" + "Name: " + name + "</td></tr>" +
            "<tr><td>" + "\nGame: " + game + "</td></tr>" +
            "<tr><td>" + "\nDate: " + date + "</td></tr>" +
            "<tr><td>" + "\nScore: " +  score + "</td></tr>" +
            "</table>");
    }   

}

function random() {
    return Math.random();
}