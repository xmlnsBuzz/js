/*
Create a function "minMax" that will accept any quantity of the arguments.

This function should return array of two elements:
1. First element in the array is minimal value among all arguments
2. Second element in the array is maximal value among all arguments

Use destructuring to parse results of the function calls.
*/

// NOTE Function의 해체는 매우 중요할 것 같아 보인다.

const minMax = ( ...nums ) => [
  nums.reduce( ( min, num ) => ( num < min ? num : min ) ),
  nums.reduce( ( max, num ) => ( num > max ? num : max ) )
];

let min, max;
/* call here "minMax" function with arguments 24, 5, 34, 10 */
[ min, max ] = minMax( 24, 5, 34, 10 );
console.log( min, max ); // 5, 34

/* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
[ min, max ] = minMax( 18, 23, 103, 70, 80, 25 );
console.log( min, max ); // 18, 103
