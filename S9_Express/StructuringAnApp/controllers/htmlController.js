/**
 * http://usejsdoc.org/
 */
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
	app.get('/',function(req,res){
		res.render('index');
//		res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Testing from server and changing font</h1></body></html>')
	});

	app.get('/UrlRetFunct/:var1',function(req,res){
		res.render('person', {varPage: req.params.var1, Qstr: req.query.qstr});
	});

	app.post('/person',urlencodedParser, function(req, res){
		res.send('Response from app.post /person!' + req.body.firstname + ' ' + req.body.lastname);
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});

	app.post('/personJSon',jsonParser, function(req, res){
		res.send('Response from app.post /personjson!' + req.body.firstname + ' ' + req.body.lastname);
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});
}