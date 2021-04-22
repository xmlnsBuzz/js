const myArray = [ 1, 2, 3 ];
console.log( myArray ); // (3) [1, 2, 3]

myArray.shift();
console.log( myArray ); // (2) [2, 3]

console.log("--------")

const removedElement = myArray.shift();
console.log( myArray ); // [3]

console.log("--------")

console.log( removedElement ); // 2


