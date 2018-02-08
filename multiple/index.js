/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var moto = require('./lightTransport');
var car = require('./heavyTransport');

module.exports = {
  moto: moto,
  car: car
};