/**
 * Function LifeCycle Part 1
*/
// "use strict";

// console.log( smile );
// console.log( smile() );
// smile(); // ? Hoisting

// ! Fucntion Declaration
// function smile () {
//   console.log( "Hhh" );
// }
// // ? 위의 3줄에서 execution할 수 있도록 Compilation(declare initialize assingment)되어 있으므로 smile();이 먼저 나와도 상관없다. 왜냐하면 compile된 function은 call하기 전에는 실행되지 않으므로...

// smile();
// console.log( "=======================" );

// // IIFE -> Immediately Invoked Function Expression
//   ( function () {
//     console.log( "That's function expression" );
//   } )();

/**
 * Function LifeCycle Part 2
*/

// ! Function Expression assigned to the variable
const sum = function ( a, b ) {
  return a + b;
};

console.log( sum( 5, 10 ) );


// NOTE // ! Function declaration과 function expression의 특징, 차이에 대해...











