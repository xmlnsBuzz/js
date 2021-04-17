/**
 * JS-BASICS/CORE/CHALLENGE 01: SOLUTION - Function Expressions
 * 
 * User following built-in functions
 * setTimeout
 * setInterval
 * clearInterval
 * 
 * Print to the console ONLY 5 messages with interval 3 seconds.
 * "Here is message numver 1"
 * "Here is message numver 2"
 * "Here is message numver 3"
 * "Here is message numver 4"
 * "Here is message numver 5"
 */
// let i = 1;
// const myInterval = setInterval( function () {
//   console.log( "Here is message number " + i );
//   i = i + 1;
// }, 2000 );

// setTimeout( function () {
//   clearInterval( myInterval );
// }, 10000 );

let i = 1;
const myInterval = setInterval( function () {
  console.log( "Here is message number " + i );
  i = i + 1;
}, 2000 );

console.log( myInterval );

setTimeout( function () {
  clearInterval( myInterval );
}, 10000 );