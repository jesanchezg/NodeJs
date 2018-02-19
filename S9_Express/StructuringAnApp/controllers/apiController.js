/**
 * http://usejsdoc.org/
 */

module.exports = function(app) {
	app.get('/api/personJSon/:var1',function(req,res){
		//get that data from the database
		res.json({firstField: 'FirstValue', SecondField: 'SecondValue'});
	});

	app.post('/api//personJSon', function(req, res){
		//save to the database
	});

	app.delete('/api/personJSon/:id', function(req,res){
		//delete from the database
	});
}