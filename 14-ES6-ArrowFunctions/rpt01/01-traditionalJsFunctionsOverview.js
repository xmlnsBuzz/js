// 1. function declaration
function fn ( a, b ) {
  return a + b;
}

// console.log( fn( 1, 2 ) );

// 2 Anonymous function expression
// option 2.1 - Assign to the variable
const fn1 = function ( a, b ) {
  return a + b;
};

// console.log( fn1( 3, 5 ) );

// option 2.2 IIFE
console.log( "IIFE is executed" );
( function ( a, b ) {
  return a + b;
} )( 2, 3 );

// 2.3 Callback function
setTimeout( function ( a, b ) {
  console.log("Callback function is executed.")
  return a + b;
}, 1000);

/* NOTE // *setTimeout format
setTimeout(function(){}, timer)
Or
setTimeout(()={}, timer)
*/

// 3 Named function 
// option 3.1 - Assign to the variable
const fn2 = function sum ( a, b ) {
  return a + b;
};

// console.log( fn1( 3, 5 ) );

// option 3.2 IIF
console.log( "IIFE is executed" );
( function sum ( a, b ) {
  return a + b;
} )( 2, 3 );

// 3.3 Named Callback function
setTimeout( function sum ( a, b ) {
  console.log( "Callback function is executed." );
  return a + b;
}, 1000 );



