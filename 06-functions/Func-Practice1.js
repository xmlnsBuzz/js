// function myFunction () {}

// console.log( myFunction );

// myFunction();

// const functionResult = myFunction();

// console.log( functionResult ); // Undefined

// console.log( myFunction() );

// console.log( myFunction( 10, true ) );

function myFunction ( a, b ) {
  console.log( a );
  console.log( b );
  return a + b;
}

myFunction( 10, 5 );
myFunction( true, null );
myFunction( "abc" );
console.log( myFunction( 4, 3 ) );
