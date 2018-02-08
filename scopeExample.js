/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var outsideScope = 'Outbacks';

(function (passedParameter) {
       var outsideScope = 'Inbacks';
       console.log(outsideScope);
       console.log(passedParameter);
}('FromOutside'));

console.log(outsideScope);