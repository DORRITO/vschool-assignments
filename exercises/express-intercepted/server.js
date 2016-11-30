var express = require("express");
var bodyParser = require("body-parser");
var sayHello = require("./route");

var app = express();
var port = 9000;

app.use(bodyParser.json());
app.use(sayHello);

app.get("/", function(req, res) {
    res.send(req.greeting);
});

app.listen(port, function() {
    console.log("Server up on port 9k");
});