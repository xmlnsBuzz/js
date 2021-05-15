/**
 * push()
 */

/* 
Create a function "pushIfUnique" with two parameters "inputArray" and "newElement"

If "inputArray" already contains "newElement" print "{newElement} is already in the array." to the console.

Otherwise push "newElement" to the "inputArray"

NOTE: We assume that "inputArray" may contain only primitive variables types.
*/

// NOTE // * object is reference type variable.
const myNumbers = [ 123, 50, 27 ];

// NOTE Ternary Operator
const pushIfUnique = ( inputArray, newElement ) =>
  inputArray.includes( newElement )
    ? console.log( `${newElement} is already in the array.}` )
    : inputArray.push( newElement );

pushIfUnique( myNumbers, 50 );
console.log( myNumbers );
pushIfUnique( myNumbers, 80 );
console.log( myNumbers );
pushIfUnique( myNumbers, 80 );
console.log( myNumbers );
pushIfUnique( myNumbers, 77 );
console.log( myNumbers );

// const newFn = num => {
//   num = num + 5;
//   console.log(num)
// };
// const myNumber = 10;
// newFn(myNumber)
// console.log(myNumber)