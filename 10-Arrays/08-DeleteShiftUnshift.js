/**
 * Delete Elements
 */

const myArray = [ true, null, 1, 2, "abc" ];
console.log( myArray ); //  [true, null, 1, 2, "abc"]

delete myArray[ 2 ];
console.log( myArray ); // [true, null, empty, 2, "abc"]

console.log( myArray[ 2 ] ); // undefined

myArray.pop();
console.log( myArray ); // [true, null, empty, 2] -> 마지막 element 삭제.

myArray.pop();
console.log( myArray ); // [true, null, empty] -> 마지막 element 삭제.

/* Shift -> element[0]을 삭제 */
myArray.shift();
console.log( myArray ); //  [null, empty] -> 첫번째 element 삭제









