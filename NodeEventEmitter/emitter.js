/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
//    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
//    this.events[type].push(listener);
};

//{
//    gotSomethigFromInternet: [function(){}, function(){}];
//}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
//            listener();
        });
    }
};

module.exports = Emitter;