/**
 * EXPRESSION STATEMENTS
 */

console.log( 4 + 3 ); // Expression statement

// console.log( console.log( 4 + 3 ); );
// Uncaught SyntaxError: missing ) after argument list

console.log( console.log( 4 + 3 ) );  // Expression statement

// console.log(argument) "()" 속에 들어가는 것은 argument여야 된다.
// 따라서 argument 끝에 semi-colon을 찍으면 error다
let a;

a = 5; // Expression statement

true;  // Expression statement

console.log(true)