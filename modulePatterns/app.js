/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var pattern1 = require('./pattern1');
pattern1();

var pattern2 = require('./pattern2');
pattern2.pattern2();

var pattern2 = require('./pattern2.js').pattern2;
pattern2();

var pattern3 = require('./pattern3');
pattern3.functToPrint();

pattern3.textParam = 'Changed Text to ObjectFunctionParamText';

var pattern3b = require('./pattern3');
pattern3b.functToPrint();

var Pattern4 = require('./pattern4');
var pat4NewObject = new Pattern4();
pat4NewObject.functToPrint();

var pattern5 = require('./pattern5');
pattern5.functToShow();

var pattern5a = require('./pattern5').functToShow;
pattern5a();