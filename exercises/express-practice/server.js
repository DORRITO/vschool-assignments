var express = require("express");
var app = express();

//in Angular
//$http.get("http://localhost:8000/").then(function(response) {
//    console.log(response.data);
//}

app.get("/", function(req, res) {
    res.send({message: "Server is working!"});
});

app.listen(8000, function() {
    console.log("server is running real good!");
});

