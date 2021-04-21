/**
 * EXAMPLE 2
 * 
 * Function scope
 */
let e;

function myFunction ( a, b ) {
  const c = true;
  console.log( c ); // true
  // console.log( d ); // 04-FunctionScope.js:11 Uncaught ReferenceError: d is not defined at myFunction
  console.log( e ); // undefined
  console.log( a, b ); // undefined undefined
}

myFunction(); // true
myFunction( 2, 3 ); // 2 3

// console.log( c ); // c는 function scope이므로 global scope에서 선언하면 
// 04-FunctionScope.js:19 Uncaught ReferenceError: c is not defined

// console.log( a ); // Uncaught ReferenceError: a is not defined

// console.log( b ); // Uncaught ReferenceError: b is not defined

