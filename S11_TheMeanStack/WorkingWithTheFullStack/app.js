/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

var elemntsSrvr = [//people
	{
		pos: '1st pos'
	},
	{
		pos: '2nd pos'
	},
	{
		pos: '3rd pos'
	}
];


app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');


app.get('/',function(req,res){
	res.render('index', {elsFromTheServer: elemntsSrvr});// serverPeople: people
});

app.listen(port);