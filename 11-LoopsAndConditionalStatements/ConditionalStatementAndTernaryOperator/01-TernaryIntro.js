/**
 * Tenary Operator
 */

/* Format
Condition ? Expression1 : Expression2;
"?" : If condition is "truthy" evaluate expression1
":" : Otherwise evaluate expression2
*/
let value = 11111;

value < 100000
  ? console.log( "truth" )
  : console.log( "false" );

value = 11;
console.log( value > 0 ? value : -value ); // value

value = -5;
let res = value > 0 ? value+1 : -value; // -value : --5 = 5
console.log( res );