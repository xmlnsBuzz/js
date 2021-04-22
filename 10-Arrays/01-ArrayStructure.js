/**
 * Array Structure
 */
"use strict";

const myArray1 = [ 1, 2, 3 ];
console.log( myArray1[ 0 ] ); // 1
console.log( myArray1[ 1 ] ); // 2
console.log( myArray1[ 2 ] ); // 3
console.log( "Total : " + myArray1.length + "ea" ); // Total : 3ea
myArray1[ 1 ] = "abc";
myArray1.push("def")
// myArray1.shift("def", "xyz")
const myArray2 = new Array( 1, 2, 3, 4 ); //

console.log( myArray1 ); //  [a, "abc", 3, "def"]
console.log( myArray2 ); // [1, 2, 3, 4]


// Object
const myObject = {
  0: 1,
  1: 2,
  2: 3
};

console.log( myObject ); // {0: 1, 1: 2, 2: 3} -> object이므로 "{}"로 감싼 것에 유의.


