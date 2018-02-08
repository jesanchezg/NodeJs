/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-07
 */

'use strict';

var EventEmitter = require('events');
var util = require('util');

class ObjctToInherit extends EventEmitter{
    constructor(){
        super();
        this.textToShow = 'Text from te propertie textToShow from the ObjctToInherit Object';
    }
}

function ObjctToInherit() {
    EventEmitter.call(this);//To Call al the methods in EventEmitter. Make sure all the methods and properties 
    //in EventEmitter are inherited to ObjctToInherit
    this.textToShow = 'Text from te propertie textToShow from the ObjctToInherit Object';
}

util.inherits(ObjctToInherit, EventEmitter);//To make inherite from an object

ObjctToInherit.prototype.functToShow = function (dataCarried) {
    console.log(this.textToShow + ': ' + dataCarried);
    this.emit('functToShow', dataCarried);
};

var objctResult = new ObjctToInherit();

objctResult.on('functToShow', function (dataCarried) {
    console.log('Call when on is Setted by the EventEmitter method inherited: ' + dataCarried);
});

objctResult.functToShow('Text Passed in function to var dataCarried');