/**
 * EXAMPLE 4
 * 
 * Undeclared variable
 * 
 * 선언되 변수와 아닌 변수의 차이
 */

a = 10;
// Variable "a" will be automatically declared in the global scope

// aa = "aaa";
// aaa = true;
console.log( a );

const myFunction = function () {
  b = 5; // Variable "a" will be automatically declared in the global scope
  console.log( b );
};

myFunction(); // 5
console.log( b ); // 5

