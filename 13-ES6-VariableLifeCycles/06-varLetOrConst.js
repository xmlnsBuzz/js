/**
 * ? Where to us CONST
 */
// * Example 1
/* 
function multiplier ( a ) {
  const MULT = 10;
  return a * MULT;
}
console.log( multiplier( 3 ) );
console.log( multiplier( 4 ) ); 
*/

// * Example 2 (Execute in Node.js)
/* 
const path = require( "path" );

console.log( path.resolve() );
 */

// * Example 3
const sum = function ( a, b ) {
  return a + b;
};

console.log( sum( 2, 5 ) );

/**
 * ? Where to use LET
 */
// ! Example 1
for ( let i = 0; i < 5; i++ ) {
  console.log( i );
}

// NOTE // ! Example 2
function shortStr ( str ) {
  const MAX_LENGTH = 15;
  if ( str.length > MAX_LENGTH ) {
    let newStr;
    newStr = str.substring( 0, MAX_LENGTH ) + "...";
    console.log( newStr );
  } else {
    // console.log( newStr ); 
    // ? newStr은 다른 block scope이므로 Uncaught ReferenceError: newStr is not defined 에러난다.
    console.log( str );
  }
}
shortStr( "La France en mon enfance" );
shortStr( "France" );

/**
 * ? Where to use VAR
 */
var person = {
  name: "Bob",
  age: 25
};

function updatePerson ( person ) {
  var updatedPerson = {};
  if ( person.name ) {
    updatedPerson.name = person.name;
    updatedPerson.updatedAt = new Date();

    return updatedPerson;
  }
}

console.log( updatePerson( person ) );
