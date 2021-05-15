/**
 * filter() Array
 * ! 조건에 맞는 element를  return.
 */
const myNumbers = [ 10, 25, 36, 100, 5 ];

const filteredNumbers = myNumbers.filter( num => num > 10 );

console.log(filteredNumbers)
console.log(myNumbers)