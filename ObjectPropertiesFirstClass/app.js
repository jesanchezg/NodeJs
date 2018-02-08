/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Object properties and methods
var obj = {
    name: 'ObjectName Parameter'
    
};

console.log(obj.name);
console.log(obj['name']);

var prop = 'name';//address of the variable. Same address like name variable in object obj

console.log(obj[prop]);

//FunctionsAndArrays

var arr = [];

arr.push(function() {
   console.log('Element 1 in the array');
});
arr.push(function() {
    console.log('Element 2 in the array');
});
arr.push(function () {
    console.log('Element 3 in the array');
});

arr.forEach(function (item) {
    item();
});