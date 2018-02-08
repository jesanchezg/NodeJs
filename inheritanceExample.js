/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Logistics(marcketPlace, value){
    this.marcketPlace = marcketPlace;
    this.value = value;
}

Logistics.prototype.install = function() {
    console.log('Installing new business in ' + this.marcketPlace + ' with a value of ' + this.value);
};

Logistics.prototype.spread = function() {
    console.log('Getting data for ' + this.marcketPlace + ' and matching values for ' + this.value);
};

Logistics.prototype.tilling = 'expert';
var womby = new Logistics('Downtown','1000');
womby.install();
womby.spread();

var getterDeal = new Logistics('Cloud','100000');
getterDeal.install();
getterDeal.spread();

console.log(womby.__proto__);
console.log(getterDeal.__proto__);
console.log(womby.__proto__ === getterDeal.__proto__);
console.log(womby.prototype === getterDeal.prototype);