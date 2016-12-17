var express = require('express');
var photoRouter = express.Router();
var PhotoObject = require('../models/photo');

photoRouter.route('/')
    .get(function (req, res) {
        PhotoObject.find({user: req.user._id}, function (err, photos) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(photos)
            }
        })
    })

    .post(function (req, res) {
        var photo = new PhotoObject(req.body);
        photo.user = req.user;
        photo.save(function (err, newPhoto) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(newPhoto);
            }
        });
    })

    .delete(function (req, res) {
        PhotoObject.findOneAndRemove({user: req.user._id}, function (err, deletedPhoto) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(deletedPhoto);
            }
        });
    });

photoRouter.route('/:photoId')
    .get(function (req, res) {
        PhotoObject.findOne({_id: req.params.photoId, user: req.user._id}, function (err, photo) {
            if (err) {
                return res.status(500).send(err);
            } else if (!photo) {
                return res.status(500).send(err);
            } else {
                res.send(photo);
            }
        });
    })
    .put(function (req, res) {
        PhotoObject.findOneAndUpdate(
            {_id: req.params.photoId, user: req.user._id},
            req.body,
            {new: true},
            function (err, photo) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(photo);
                }
            }
        );
    })
    .delete(function(req, res) {
        PhotoObject.findOneAndRemove(
            {_id: req.params.photoId, user: req.user._id},
            function(err, deletedPhoto) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send('Your photo was deleted');
                }
            });
    });

module.exports = photoRouter;