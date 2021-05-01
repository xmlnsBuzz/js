/**
 * Global execution context and Function execution context
 */
console.log( "This is global execution context" );

const a = 10;

console.log( a );

function myFunction ( a, b ) {
  console.log( "This is function execution context" );
  return `${a} + ${b} = ${a + b}`;
}

console.log( myFunction( 5, 20 ) ); // new function execution context is created
console.log( myFunction( 3, 2 ) ); // new function execution context is created

// const myFunc = function ( a, b ) {
//   return a + b;
// };

// console.log( myFunc( 2, 3 ) );
// console.log(myFunc(6,5))

/**
 * Excution contexts stack
 */

console.log( "1 Global execution context - root level in the stack" );

function firstLevel () {
  console.log( "2 Function execution context - second level in the stack" );

  function secondLevel () {
    console.log( "3 Function execution context - third level in the stack" );

    function thirdLevel () {
      console.log( "4 Function execution context - fourth level in the stack" );
    }
    thirdLevel();
  }
  secondLevel();
}

firstLevel();