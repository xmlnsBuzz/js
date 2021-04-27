/**
 * If Else statement
 */

/* Format
if(Condition){
  Action if condition is "truthy"
} else {
  Action if condition is "falsy"
}
NOTE 한번 발생한다.
 */

let val = 10;

if ( val < 5 ) {
  val += 20;
} else {
  val -= 20;
}
console.log(val)