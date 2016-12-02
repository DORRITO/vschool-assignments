var express = require("express");
var bodyParser = require("body-parser");
var customerRoutes = require("./routes/customerRoutes");
var path = require("path");

var port = 8000;
var app = express();


app.use(express.static(path.join("../public")));
app.use(bodyParser.json());
app.use(customerRoutes);



//run the server
app.listen(port, function() {
    console.log("Server is up on port 8000");
})