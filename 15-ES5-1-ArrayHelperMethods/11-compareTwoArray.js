/**
 * Compare Two Array
 * // NOTE 이 예제는 
 * pointer의 같음이 아닌,
 * 각 element들의 갯수와 대응값이 같은지를 찾는 logic이다.
 */
const a = [ 1, 2, 3 ];
const b = [ 1, 2, 3 ];

const a1 = a;

console.log( a === b );
console.log( a1 === a );

const arraysAreEqual = ( arrayOne, arrayTwo ) =>
  arrayOne.length === arrayTwo.length
  &&
  arrayOne.every(
    ( element, index ) => element === arrayTwo[ index ]
  );

console.log( "----------" );

const c = [ 2, 1, 3 ];
const d = [ 1, 2, 3, 4 ];

console.log( arraysAreEqual( a, b ) );

console.log( arraysAreEqual( a, c ) );
console.log( arraysAreEqual( a, d ) );
a.push( 4 );
console.log( arraysAreEqual( a, d ) );

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo".

If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */





/* #region   */

// const a = [ 1, 2, 3 ];
// const b = [ 1, 2, 3 ];

// const a1 = a;
// // a.push(4);

// console.log( a === b ); // false. Different pointers
// console.log( a === a1 ); // true. Because pointers are equals

// /* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo".

// If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

// Otherwise return "false". */

// const arraysAreEqual = ( arrayOne, arrayTwo ) =>
//   arrayOne.length === arrayTwo.length &&
//   arrayOne.every(
//     ( element, index ) => element === arrayTwo[ index ]
//   );

// const c = [ 2, 1, 3 ];
// const d = [ 1, 2, 3, 4 ];

// console.log( "_____" );

// console.log( arraysAreEqual( a, b ) ); // true
// console.log( arraysAreEqual( a, c ) ); // false
// console.log( arraysAreEqual( a, d ) ); // false


/* #endregion */