var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var lightSabers = 
    [{
        color: "blue",
        owner: "luke"
    },
    {
        color: "purple",
        owner: "windu"
    }
    ];

app.get("/lightsabers", function(req, res) {
    var queryKey = Object.keys(req.query)[0];
    var queryVal = req.query[queryKey];
    if (req.query) {
        var lightArr = [];
        for (var i = 0; i < lightSabers.length; i++) {
//            console.log(lightSabers[i][queryKey]);
//            console.log(queryVal);
            if (lightSabers[i][queryKey] === queryVal) {
                lightArr.push(lightSabers[i]);
            }
        };
        res.send(lightArr);
    } else {
        res.send(lightSabers);
    }
    console.log("Get is working")
})


app.listen(9000, function() {
    console.log("Thing finder is up on port 9k");
});