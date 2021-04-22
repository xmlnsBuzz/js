const myArray = [ 1, 2, 3 ];
console.log( myArray ); //(3) [1, 2, 3]

myArray.unshift( 0 );
console.log( myArray ); // (4) [0, 1, 2, 3]

console.log( "--------" );
myArray.unshift( "abc" );
console.log( myArray ); // (5) ["abc", 0, 1, 2, 3]