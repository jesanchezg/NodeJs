/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-06
 */

var animal = {
    superPower: '',
    numberOfArms: '',
    action: function () {
        return this.superPower + ' ' + this.numberOfArms;
    }
};

var anguilal = Object.create(animal);
anguilal.superPower = 'Fire!';
anguilal.numberOfArms = '0';

var asti = Object.create(animal);
asti.superPower = 'Mucus';
asti.numberOfArms = '5';

console.log(anguilal.action());
console.log(asti.action());