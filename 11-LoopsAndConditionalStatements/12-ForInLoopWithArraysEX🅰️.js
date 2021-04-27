/**
 * For In Loop with Arrays
 * 
 * iterate : 반복,
 * enumerate : 열거, 나열
 */

const myArray = [ true, {}, {}, 10 ];

Array.prototype.globalProp = "Global Array property";

for ( let key in myArray ) {
  console.log( key + ":", myArray[ key ] );
}
console.log( myArray.length );



















