/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 //pass by value
function change(a){
    a = 2;
}

var b = 3;

change(b);
console.log(b);


//pass by reference
function changeRefObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeRefObj(c);
console.log(c);