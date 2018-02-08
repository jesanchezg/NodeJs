/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function patterFunct3Object(){
    this.textParam = 'paramText inside a function';
    this.functToPrint = function () {
        console.log(this.textParam);
    };
}

module.exports = new patterFunct3Object();
