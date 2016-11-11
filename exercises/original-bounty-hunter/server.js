//dont undestand /name/:name  ':" placeholder meaning
// or req.param

///////////app set up//////////////

var express = require("express");
var uuid = require("uuid");
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require("morgan");
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.static("public"));

/////////////////////////////////

app.listen(3000, function() {
    console.log("server is up on port 3000");
});

var bounties = [
    {
        name: "Jedi",
        lName: "Surname",
        living: true,
        bounty: "10,000 credits",
        type: "jedi",
        id: "1"
    },
    {
        name: "Sith",
        lName: "Surname",
        living: false,
        bounty: "10,000 credits",
        type: "sith",
        id: "2"
    }
];

//add get
app.get("/bounties", function(req, res) {
    res.send(bounties);
});

//add a post
app.post("/bounties", function(req, res) {
    var bounty = req.body;
    bounty.id = uuid.v4();
    bounties.push(bounty);
    res.send(bounty);
});

//add a put
app.put("/bounties/:bountyId", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
            res.send(req.body);
        }
    }
});

app.delete("/bounties/:bountyId", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
            return res.send(bounties);
        }
    };
    res.send("That's not a valid id!");
});