/**
 * Arguments VARIABLE In Function
 */
//! regular function declaration
function sum () {
  console.log( arguments ); //? Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log( typeof arguments ); //? object
  console.log( Array.isArray( arguments ) );

  const argumentsArray = Array.from( arguments );
  console.log( argumentsArray );
}

// const sum2 = () => {
//   console.log( arguments ); //? Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log( typeof arguments ); //? object

//   const argumentsArray = Array.from( arguments );
//   console.log( argumentsArray );
// };


sum( 1, 2, 3, 4, 5 );
// sum2( 1, 2, 3, 4, 5 ); // ? 09-argumentsInRegVsArrow.js:14 Uncaught ReferenceError: arguments is not defined at sum2

// NOTE 위의 방식으로는 List of arguments variable에 access할 수 없다는 사실을 알 수 있다.
// ! 하지만 다른 방식으로 해결할 수 있는데, ...(spread operator)를 사용한다.

const sum2 = ( ...arguments ) => {
  console.log( arguments ); //? (7) [1, 2, 3, 4, 5, 6, 7]
  console.log( typeof arguments ); //? object
  console.log( Array.isArray( arguments ) );


  const argumentsArray = Array.from( arguments );
  console.log( argumentsArray ); //? (7) [1, 2, 3, 4, 5, 6, 7]
};

sum2( 1, 2, 3, 4, 5, 6, 7 );

// ! RFE에서는 






















