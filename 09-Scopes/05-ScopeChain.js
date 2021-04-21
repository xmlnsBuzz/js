/**
 * EXAMPLE 3
 * 
 * Scope chain
 */
const c = 2;
function sum ( a, b ) {
  // const c = 3;
  function mult ( a, b ) {
    return a * b * c; // 20
  }
  console.log( mult( a, b ) );
  return a + b;
}

const result = sum( 10, 5 );

console.log( result ); // 15