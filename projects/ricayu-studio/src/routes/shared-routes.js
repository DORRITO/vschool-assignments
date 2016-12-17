var express = require('express');
var sharedRouter = express.Router();
var PhotoObject = require('../models/photo');

sharedRouter.route('/')
    .get(function(req, res) {
        PhotoObject.find({}, function(err, photos) {
            if(err) {
                return res.status(500).send(err);
            } else {
                res.send(photos)
            }
        })
    });

module.exports = sharedRouter;