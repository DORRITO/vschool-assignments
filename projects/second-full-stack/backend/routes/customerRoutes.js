var express = require("express");
var customerRoutes = express.Router();

var customer = [
    {
        name: "customer 1",
        etc: "more"
    }
];

customerRoutes.route("/customers")
    .get(function(req, res) {
        res.send("Customer1");
    })

module.exports = customerRoutes;