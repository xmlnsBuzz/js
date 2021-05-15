/**
 * ! find()
 * ? 찾는 조건에 맞는 element를 반환하며, 조건이 true인 element를 find 하고 나면 즉시 interrupt하여 find를 마친다. 맞는 조건이 하나도 없으면 undefined 반환, 즉 모든 element가 false이면 "undefined"
 */

const myArray = [ 10, [], {}, "abc", true, 15 ];

const result = myArray.find( element => {
  console.log( element );
  return typeof element === "string";
} );
// * 위의 "boolean" 자리에 "string", "number", "object" 등을 넣어본다.

console.log( result );