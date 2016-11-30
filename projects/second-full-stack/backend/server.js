var express = require("express");
var bodyParser = require("body-parser");

var port = 8000;
var app = express();


app.get("/", function(req, res) {
    res.send("Heyyooooo");
})
//run the server
app.listen(port, function() {
    console.log("Server is up on port 8000");
})