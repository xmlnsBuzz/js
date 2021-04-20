/**
 * Expression 과 Statement의 차이
 */

const myObject = {
  x: 10,
  y: true
};


// console.log( myObject.x, myObject.y );
// delete myObject.x;
// console.log( myObject.x, myObject.y );

console.log( delete myObject.x );
console.log( delete myObject.y );

function fn () {
  console.log( "Greeting from the 'fn' function" );

  return function ( a ) {
    console.log( a );
  };
}

fn()( null );


/**
 * Explain why semicolon is added or not?
 */

function firstFunction ( a, b ) {
  return a + b;
} // Function declaration

const secondFunction = function ( a, b ) {
  return a + b;
}; // const Statement









