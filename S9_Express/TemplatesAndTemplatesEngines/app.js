/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

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

app.get('/UrlRetFunct/:var1',function(req,res){
	res.render('person', {varPage: req.params.var1});
});

app.listen(port);