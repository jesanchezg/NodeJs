/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-07
 */

var objCallApply = {
    textToShow: 'variable Text to Show',
    fnctShowText: function () {
        console.log(`Show Text => ${this.textToShow}`);
    }
};

objCallApply.fnctShowText();
objCallApply.fnctShowText.call({textToShow: 'New Text for Call Param'});//Call Methpd. Dif with Apply is you send parameters: 
//{textToShow:'New Text for Call Param'}, param, param2
objCallApply.fnctShowText.apply({textToShow: 'New Text for Apply Param'});//Apply Method. Difference with Call is Apply you send an array of parameters ex: 
//{textToShow: 'New Text for Apply Param'}, [param, param2]