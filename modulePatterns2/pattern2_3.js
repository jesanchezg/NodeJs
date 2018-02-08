/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-05
 */

function pattern2_3() {
    this.textToShow = 'Object exported to show';
    this.pattern2_3Funct = function() {
        console.log(this.textToShow);
    };
};

module.exports = new pattern2_3();