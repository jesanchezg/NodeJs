/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-05
 */

var pattern2_1 = require('./pattern2_1');
pattern2_1();

var pattern2_2 = require('./pattern2_2');
pattern2_2.pattern2_2();

//var pattern2_2 = require('./pattern2_2').pattern2_2();
//pattern2_2;

var pattern2_3 = require('./pattern2_3');
pattern2_3.pattern2_3Funct();
pattern2_3.textToShow = 'Change value of text to show in pattern3 and its the same object beacause a cache of the object in memory';

var pattern2_3b = require('./pattern2_3');
pattern2_3b.pattern2_3Funct();

var pattern2_4 = require('./pattern2_4');
var patt2_4 = new pattern2_4();
patt2_4.pattern2_4Funct();

var pattern2_4b = require('./pattern2_4');
var patt2_4b = new pattern2_4b();
patt2_4b.textToShow = 'changing text to Show for pattern2_4. In a different object from same source';
patt2_4b.pattern2_4Funct();

var pattern2_5 = require('./pattern2_5');
pattern2_5.pattern2_5Funct();

var pattern2_5b = require('./pattern2_5').pattern2_5Funct();
pattern2_5b;