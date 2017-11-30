var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var shareModel = new Schema({
    code: {
        type: String
    },
    buyPrice: {type: Number},
    nrBought: {type: Number},
    dateUpdated:{type:Date},
    open:{type:Number},
    close:{type:Number}
});

module.exports= mongoose.model('Share', shareModel);