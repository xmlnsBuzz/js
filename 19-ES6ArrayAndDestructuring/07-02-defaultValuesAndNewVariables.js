/**
 * Example 9 - Default values and new variables
 * E:\Users\Administrator\Documents\Coding\JS\JS Bible 2019\19. ES6 Array and Object Destructuring\10. PRACTICE - Object Destructuring - PART 2.mp4
 */

const myObject = {
  a: 10,
  b: true
};

// const { a: a, b: b } = myObject;
// console.log( a, b );

const {
  a: newA,
  b: newB,
  c: newC = "default value"
} = myObject;
// console.log( a, b ); // Uncaught ReferenceError: a is not defined

console.log( newA, newB, newC ); // 10 true
