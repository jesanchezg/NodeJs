/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-02
 */

var actionCerb = require('./action.json');

var action = function() {
    console.log(actionCerb.firstWeapon);
};

module.exports = action;