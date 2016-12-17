var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var photoSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "Owner",
        required: true
    },
    photoName: String,
    photoValue: Number,
    photoPhotos: String,
    photoImageUrl: String
});

module.exports= mongoose.model('Photo', photoSchema);