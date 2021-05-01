/**
 * typeof and instanceof Operator
 */

console.log( typeof 10 ); // number
console.log( typeof true ); // boolean
console.log( typeof "abc" ); // string
console.log( typeof null ); // object
console.log( typeof undefined ); // undefined

console.log( typeof {} ); // object
console.log( typeof [] ); // object

const a = 10;
if ( typeof a === "number" ) {
  console.log( "It is number" );
}

const b = [];
if ( typeof b === "object" ) {
  console.log( "It is object" );
}


const c = [];
console.log( c instanceof Array ); // true
console.log( c instanceof Object ); // true

const d = {}; // NOTE inspector console에서 prototype을 볼 것. prototype이 몇 개 안됨.
console.log( d instanceof Array ); // false
console.log( d instanceof Object ); // true

const myString = "abc";
console.log( myString instanceof String ); // false
console.log( myString ); // abc
console.log( myString instanceof Object ); // false

console.log( typeof myString ); // string

const myArray = [ 1, 2 ];
if ( myArray instanceof Object ) {
  console.log("It's Okey")
}
