const myArray = [ 1, 2, 3 ];
console.log( myArray ); // (3) [1, 2, 3]

myArray.pop();
console.log( myArray ); // (2) [1, 2]

const removedElement = myArray.pop();
console.log( myArray ); // [1]
const removedElement2 = myArray.pop();
console.log( myArray ); // []
console.log( "---------" );
console.log( removedElement ); // 2
console.log( removedElement2 ); // 1


// NOTE pop method에 대해 MDN에서 조사할 것.