var express = require("express");
var uuid = require("uuid");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

///////////////////data////////////////
var todos =   
        [{
            "name": "Get things done",
            "description": "doing this thing",
            "completed": false,
            "_id": uuid.v4()
        }];

//////////////////server responses//////////////// 
app.get("/todos", function(req, res) {
    res.send(todos);
    console.log("Get todos worked");
});

app.get("/todos/:todosId", function(req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params.todosId) {
            res.send(todos[i]);
        };
    };
    console.log("get by id worked");
});

app.post("/todos", function(req, res) {
    var newTodo = req.body;
    newTodo._id = uuid.v4();
    todos.push(newTodo);
    res.send(newTodo);
    console.log("Post todo worked")
});

app.put("todos/:todosId", function(req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params.todosId) {
            todos[i] = req.body;
            res.send(todos);
        };
    };
    console.log("put worked");
});

app.delete("todos/:todosId", function(req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params.todosId) {
            todos.splice(i, 1);
            res.send(todos);
        };
    };
    console.log("Delete worked");
});

/////////////server up////////////////
app.listen(8000, function() {
    console.log("Express todo is up and running on 8k");
});