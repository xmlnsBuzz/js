/**
 * Declare new variable using "const" and assign empty array as a value to it.
 * Then push couple of elements to this newly created array.
 * And finally remove las element from this array.
 * 
 * // NOTE delete method로 지우면 지워진 element가 empty로 되므로 array length는 그대로다. 따라서 완전히 지울 때는 "pop()"을 사용해서 length도 줄인다.
 */

const myArray = [];

myArray.push( 1 );
myArray.push( "abc" );

console.log( myArray );

myArray.pop();
console.log( myArray );