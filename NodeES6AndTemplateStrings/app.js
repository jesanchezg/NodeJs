/*
 * Autor: jairo.sanchezgalvis
 * Since: 2018-02-07
 */

var normalString = 'first normal chain';

var concatString = 'second concat String' + normalString;

var templateLiteral = `third Template Literal + ${ normalString}`;

console.log(concatString);
console.log(templateLiteral);
