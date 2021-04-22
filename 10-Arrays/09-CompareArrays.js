/**
 * Compare Arrays
 */

const myArray1 = [ 1, 2, 3 ];
const myArray2 = [ 1, 2, 3 ];

console.log( myArray1 === myArray2 ); // false
// pointer와 pointer를 비교했으므로 false

console.log( myArray1.toString() === myArray2.toString() ); // true
// toString()은 variable에 할당된 문자열(들)을 return

const copyOfMyArray1 = myArray1;
console.log( copyOfMyArray1 === myArray1 ); // true
// copyOfMyArray1는 myArray1을 refer하고 있으므로 true

const copyOfMyArray2 = myArray2;
console.log( copyOfMyArray2 === myArray2 ); // true
