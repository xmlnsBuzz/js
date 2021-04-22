/**
 * Modify Array Element 
 */

const myArray = [ 3, true, "abc", {} ];
console.log( myArray );

myArray[ 1 ] = "New value for second element";
console.log( myArray );

myArray[ 0 ] = null;
console.log( myArray );

myArray[ 3 ].newProp = 10;
console.log( myArray );

myArray[ 3 ].newProp1 = 20;
console.log( myArray );

console.log(myArray[3]["newProp1"])
console.log(myArray[3][0])










