/**
 * Spread Operator
 */

const myGreeting = ( name, city, age ) => {
  return `Hello from ${ name } who is ${ age } years old and lives in ${ city }.`;
};

const myPerson = [ "Alice", "Boston", 20 ];
console.log( myGreeting( ...myPerson ) );

const anotherPerson = [ "New York", 25 ];
// Combine elements 'Bob' below && 'New York', '25' above
console.log( myGreeting( "Bob", ...anotherPerson ) );

/**
 * Concatenate arrays
 */
const a = [ 1, 2, 3 ];
const b = [ 4, 5 ];
const c = a.concat( b ).concat( 6 );
console.log( c );

const d = [ ...a, ...b, 6 ];
console.log( d );
console.log( "----------" );

/**
 * Create Date
 */
const dateInfo = [ 2025, 10, 10 ];

const date = new Date( ...dateInfo );
console.log( date );

console.log( "----------" );
/**
 * Copy array to another
 */
const myArray = [ "a", 5, [], true ];

const newArray = [ ...myArray ];
newArray.push( 10 );
newArray[ 2 ].push( 7 );
console.log( newArray );

console.log( "----------" );

/**
 * Copy object // ! ES 2018
 */
const myObject = { a: 10, b: "a", d: [ 1, 2 ] };
const copiedObject = { ...myObject };
const copiedRefObject = myObject;
copiedObject.a = 20;
copiedObject.d.pop();
console.log( copiedObject );
console.log( myObject );

/**
 * Spread String
 */
const myStr = "Hello World";

const letters = [ ...myStr ];
console.log( letters )

const oldStyleLetters = myStr.split(" ")
console.log(oldStyleLetters)






