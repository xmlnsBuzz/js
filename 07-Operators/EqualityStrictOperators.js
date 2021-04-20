/**
 * Strict Equality Operators
 */

let myString = "0";
let myNumber = 0;
let myBoolean = false;

console.log( myString === myNumber ); // true
console.log( myNumber === myBoolean ); // true 1 -> true, 0 -> false
console.log( myString === myBoolean ); // true 위와 같은 이유.
console.log( "-----------" );

console.log( Number( myString ) === myNumber ); // true
console.log( +myString === myNumber ); // NOTE unary plus(+)를 붙이면 true
console.log( Boolean( myNumber ) === myBoolean ); // true 1 -> true, 0 -> false
console.log( Boolean( Number( myString ) ) === myBoolean ); // true 위와 같은 이유.
console.log( "-----------" );

// NOTE Never us "==" and "!=" operators because it makes debugging very hard.

console.log( myString != myNumber ); // false
console.log( myString !== myNumber ); // true

console.log( "-----------" );

console.log( null === undefined ); // false
console.log( null == undefined ); // true
// null = 0, undefined = 0 으로 할당되기 때문??? 따라서
console.log( 0 === "" === null === undefined === false ); // true

console.log( 0 === "" ); // false
console.log( false === null ); // false
console.log( false === undefined ); // false
console.log( false === false ); // true


