/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-05
 */

function pattern2_4() {
    this.textToShow = 'Pattern2_4. Object exported to show and creates a different object to Work whit it';
    this.pattern2_4Funct = function() {
        console.log(this.textToShow);
    };
};

module.exports = pattern2_4;