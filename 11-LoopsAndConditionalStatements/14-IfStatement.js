/**
 * If Statement
 */

/* Format
if (Condition:boolean) {
  // Actions if Condition is "truthy"
}
NOTE 한번 발생한다.
*/

/**
 * EX 1
 */
let val = 10;
if ( val > 5 ) {
  val += 20;
}
console.log( val );