/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var getIts = function(){
  console.log('Calling console.log from function in moduleExportExample.js. Function available in this file.');  
};

console.log('Another executions in the file and outside de function file. After the function and console.log(Calling...');

module.exports = getIts;