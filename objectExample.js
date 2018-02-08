/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var programmer = {
  name: 'Ernesto',
  languagePrinc: 'Java',
  databasePrinc: 'Postgresql',
  status: {
      readyToWork: 'No',
      exportStatus: function () {
        console.log(programmer['name'] + ' is working in ' + programmer.languagePrinc + ' and ' + programmer['databasePrinc']);
    }
  }
};

programmer.status.exportStatus();
console.log(programmer.status.readyToWork);

console.log(programmer['name']);
//console.log(programmer.exportStatus.readyToWork);