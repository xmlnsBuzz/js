/**
 * arguments Keyword in Function
 * // NOTE // ! 뭔가 써 먹을 것 같은 
 */

// Regular Function Declaration
function sum () {
  console.log( arguments ); // NOTE // ! arguments는 'keyword'이다.
  console.log( typeof arguments ); // object
  console.log( Array.isArray( arguments ) ); // false
  const argumentsArray = Array.from( arguments );
  console.log( argumentsArray );
}

// NOTE // ! RFE와 달리 AFE에서는 인수로 rest(나머지) operator(...)를 써야되는 이유

// Arrow Function Expression
const sum2 = ( ...arguments ) => {
  console.log( arguments ); // NOTE // ! arguments는 'keyword'이다.
  console.log( typeof arguments ); // object
  console.log( Array.isArray( arguments ) ); // true
  const argumentsArray = Array.from( arguments );
  console.log( argumentsArray );
};

sum( 1, 2, 3, 4, 5 );
sum2( 1, 2, 3, 45 );



