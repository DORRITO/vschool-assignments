var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 8000;

app.get("/", function(req, res) {
    res.send("Heyyooooo");
})

app.listen(port, function() {
    console.log("Server is up on port 8000");
})