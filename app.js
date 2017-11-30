var express = require('express'),
mongoose = require('mongoose'),
    bodyParser = require('body-parser')
;

var db = mongoose.connect('mongodb://localhost/shareAPI');
var share = require('./models/shareModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('hello this is thadse api');
});

app.listen(port, function () {
    console.log('hello I am dfsfd not');
});


var shareRouter =express.Router();

shareRouter.route('/sharesf')
    .post(function(req, res){
        var share = new share(req.body);

        console.log(share);
        share.save();
        res.status(201).send(share);

    })
    .get(function (req, res) {
        var query = req.query;
        share.find(query,function(err,shares){
            if(err)
                console.log(err);
            else
                res.json(shares);
        });
    });

shareRouter.route('/shares/:shareId')
    .get(function(req,res){

        share.findById(req.params.shareId, function(err,share){
            if(err)
                res.status(500).send(err);
            else
                res.json(share);
        });
    });



app.use('/api',shareRouter)