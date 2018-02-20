/**
 * http://usejsdoc.org/
 */

angular.module('TestApp',[]);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
	this.message = 'Hello';
	this.elemnts = [
		{
			pos: '1st pos'
		},
		{
			pos: '2nd pos'
		},
		{
			pos: '3rd pos'
		}
	]
}