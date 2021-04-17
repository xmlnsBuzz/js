/**
 * EXAMPLE 1
 * 
 * Try to "declare" function expression
 */

const myFunction = function ( a, b ) { console.log( "object" ); };
console.log(myFunction()) // NOTE Undefined
console.log( myFunction ); // NOTE result는 ƒ (a,b) {console.log("object") }
