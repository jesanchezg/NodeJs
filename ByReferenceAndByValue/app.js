/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//pass by value
function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a);

function ChangeObj(objByRef) {
    objByRef.prop1 = function () {};
    objByRef.prop2 = {};
}

var obj = {};
obj.prop1 = {};//Just create some value for an object.
ChangeObj(obj);
console.log(obj);