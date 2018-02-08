/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function patterFunct4Object(){
    this.textParam = 'paramText inside a function for Pattern4. Create an objects in a callling file. And call properties in the object created.';
    this.functToPrint = function () {
        console.log(this.textParam);
    };
}

module.exports = patterFunct4Object;
