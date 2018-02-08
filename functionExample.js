/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function statement
function greet(){
    console.log("Normal function!");
}
greet();

//fucntions are first-class
function logGreeting(fn){//Function name like parameter
    fn();//Execute function
}
logGreeting(greet);

//function exrrpession flag
var greetMe = function() { 
    console.log('From expression Flag');
};

//function exrrpession flag
var greetMe2 = function() { 
    console.log('Another From expression Flag');
};

module.exports = greetMe,greetMe2;
//module.exports = greetMe2;

//Call of a function created just with the name
greetMe();
greetMe2();

//it's first-class function call
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function () {
    console.log('From nested created function in a first-class automatic function call');
});