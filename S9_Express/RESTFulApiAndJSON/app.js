/**
 * http://usejsdoc.org/
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 4000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use('/',function(req,res,next){
	console.log('Request Url: '+req.url);
	next();
});

app.get('/',function(req,res){
	res.render('index');
//	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Testing from server and changing font</h1></body></html>')
});

app.get('/api/personJSon/:var1',function(req,res){
	//get that data from the database
	res.json({firstField: 'FirstValue', SecondField: 'SecondValue'});
});


app.post('/api//personJSon',jsonParser, function(req, res){
	//save to the database
});

app.delete('/api/personJSon/:id', function(req,res){
	//delete from the database
});

app.listen(port);