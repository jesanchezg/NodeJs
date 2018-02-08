/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var util = require('util');

var nameToFormat = 'Choncho';
var showNameFormat = util.format('Format for name, %s', nameToFormat);
util.log(showNameFormat);