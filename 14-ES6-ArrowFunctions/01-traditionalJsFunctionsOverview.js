// ? 1. function declaration
function fn ( a, b ) {
  return a + b;
}

fn( 2, 3 );

// ? 2. Anonymous function expression
// 2.1 Assignment to the variable
const fn1 = function ( a, b ) {
  return a + b;
};

fn1( 2, 3 );

// 2.2 IIFE 
// ! IIFE에서는 아래를 'sum(a,b)'로 해도 실행됨. no error
( function ( a, b ) {
  console.log( "IIFE is executed." );
} )( 2, 3 );

// 2.3 Callback function
// ! Callback에서도 아래를 'sum(a,b)'로 해도 실행됨. no error
setTimeout( function ( a, b ) {
  console.log( "CallBack function is executed." );
  return a + b;
}, 1000 );



// ? 3. Named function 
// 3.1 Assignment to the variable
const fn2 = function ( a, b ) {
  return a + b;
};

fn2( 2, 3 );

// 3.2 IIF 
// ! IIFE에서는 아래를 'sum(a,b)'로 해도 실행됨. no error
( function sum ( a, b ) {
  console.log( "IIF is executed." );
} )( 2, 3 );

// 3.3 Named Callback function
// ! Callback에서도 아래를 'sum(a,b)'로 해도 실행됨. no error
setTimeout( function sum ( a, b ) {
  console.log( "Named callback function is executed." );
  return a + b;
}, 1000 );