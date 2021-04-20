/**
 * Logical Operators CHALLENGE 01
 */

/**
 * TASK 1
 * 
 * Compare 2 variables "myVariable1" and "myVariable2".
 * Log to the console "true" if "myVariable1" is less than or equal to "myVariable2"
 * Conver both variables to numbers before comparison.
 */

let myVariable1, myVariable2;
myVariable1 = 1;
myVariable2 = "2";

console.log( myVariable1 <= +myVariable2 );
console.log( "---------------" );

/**
 * Remainder
 */
let myNumber1 = 10;
let myNumber2 = 3;

console.log( myNumber1 % myNumber2 );

console.log( 25 % 5 ); // 0
console.log( 14 % 8 ); // 6

console.log( 100 % 30 % 3 ); // 1

/**
 * TASK 3
 */

console.log( 3 || true && null || false ); // 3
console.log( true && null ); //null
console.log( 3 || null ); // 3
console.log( 3 || false ); // 3

console.log( "-------------------------------" );

/**
 * TASK 4
 * 
 * Find alternatives
 */

let a = 10;

// a = a + 1;
a += 1;
console.log( a ); // 11

// a = a * 2;
a *= 2;
console.log( a ); // 22

// a = a - 5;
a -= 5;
console.log( a ); // 17

// a = a / 2;
a /= 2;
console.log( a ); // 8.5