/**
 * Ternary Operator
 */

let i = 10;
let j;

j = i < 100 ? "stu" : "oops";
// NOTE01 j = [i < 100 ? "stu" : "oops"];  i<100 을 evaluate하여 얻은 결과를 j에 assign한다.
console.log( j );

i > 10 && j
  ? console.log( "Condition is truthy" )
  : console.log( "Condition is falsy" );

