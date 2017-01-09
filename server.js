var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//
mongoose.connect('mongodb://DbYugo:dwi123@ds155418.mlab.com:55418/media_new');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use('/api',require('./routes/api'));

app.listen(1000);
console.log("servernya jalan dong.");

