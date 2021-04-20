/**
 * Operators Associativity
 */
let a, b;
b = 3;

a = b = 5; // right to left: First : assign 5 to b, Second : assign b(5) to a
console.log( a, b ); // 5 5

console.log( 4 + 5 + 6 ); // 15 ltr
console.log( 6 + 5 + 4 ); // 15 ltr

console.log( 5 * 10 / 2 ); // 25 ltr
console.log( 5 * 10 / 2 / 5 ); // 5 ltr