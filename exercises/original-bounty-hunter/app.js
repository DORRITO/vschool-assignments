// dont understand body parser
//dont undestand /name/:name  ':" placeholder meaning
//can only have one get?
//how to make "/" into "/somename"

var express = require("express");
var uuid = require("uuid");

var app = express();


app.listen(3000, function() {
    console.log("server is up on port 3000");
});

var id1 = uuid.v4();
var id2 = uuid.v4();

var bounty = [
    {
        name: "Jedi",
        lName: "Surname",
        living: true,
        bounty: "10,000 credits",
        type: "jedi",
        id: id1
    },
    {
        name: "Sith",
        lName: "Surname",
        living: false,
        bounty: "10,000 credits",
        type: "sith",
        id: id2
    }
]


app.get('/', function(req, res) {
//    res.send("hello world!");
    res.send(bounty);
});


//app.post("/", function(req, res) {
//    bounty.id = uuid.v4();
//    bounty.push(//);
//    res.send(bounty);
//});