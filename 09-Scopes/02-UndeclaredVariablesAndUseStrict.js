/**
 * Strict mode
 * 
 * Prevents usage of the undeclared variables
 */
"use strict";
// // let a; // 이 선언은 안하면 strict mode에서 error남.
// function myFn () {
//   a = true;
//   console.log( a ); //  Uncaught ReferenceError: a is not defined at myFn
//   // strict mode에서는 variable declaration이 없어서 error난다.
// }

// myFn();
// console.log( a );

function myFn () {
  b = 5;
}

myFn();