/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.EVENTTOCALL, function() {
    console.log('Show text when first Function in the array is called');
});

emtr.on(eventConfig.SECONDTEXTTOCALL, function() {//If they have the same(Like 'txtFnNameToCall') name the program does a secuecial call of the functions ready stacked in the array on.
    console.log('Show text when second function call name is called.');
});

console.log('Hello');
emtr.emit(eventConfig.EVENTTOCALL);

emtr.emit(eventConfig.SECONDTEXTTOCALL);