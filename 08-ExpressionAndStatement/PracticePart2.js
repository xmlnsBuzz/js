/**
 * STATEMENTS
 */
let a; // Variable declaration is statement

a = 3;

function myFunction ( b ) {
  /* console.log(return b); // Uncaught SyntaxError: Unexpected token 'return' // 'return b'는 expr이 아닌 stmnt다.
  return b; */
  return console.log(b)
}

myFunction( a );

if ( true ) {
  console.log("Hello from 'if' statement!")
} // "if" statement이다. 따라서 아래처럼

console.log(if ( true ) {
  console.log( "Hello from 'if' statement!" );
}) //Uncaught SyntaxError: Unexpected token 'if' // error다. 왜냐하면 










