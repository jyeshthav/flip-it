var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/', function(req, res){
    res.render('index');
});
app.post('/', urlencodedParser, function(req, res){
    // console.log(req.body);
    var h = req.body.heads;
    var t = req.body.tails;
    var rand = [h, t];
    var result = rand[(Math.floor(Math.random()*10))%2];
    res.render('result', {qs: result});
});
app.get('/result', function(req, res){
    res.render('index');
});

app.listen(8080);