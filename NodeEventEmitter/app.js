/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Emitter = require('./emitter');

var emtr  = new Emitter();

emtr.on('txtFnNameToCall',function () {
    console.log('Show text when first Function in the array is called');
});

emtr.on('secondTxtFnNameToCall',function () {//If they have the same(Like 'txtFnNameToCall') name the program does a secuecial call of the functions ready stacked in the array on.
    console.log('Show text when second function call name is called.');
});

console.log('Hello');
emtr.emit('txtFnNameToCall');

emtr.emit('secondTxtFnNameToCall');