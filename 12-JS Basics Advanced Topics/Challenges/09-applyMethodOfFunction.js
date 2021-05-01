/**
 * Apply - Custom "this" and arguments
 */
const myObject = {
  a: 10,
  b: null
};

function myFunction ( a, b, c ) {
  let sum = a + b + c;

  // console.log( a + b );
  // console.log( this );
  for ( let key in this ) {
    if ( typeof this[ key ] === "number" ) {
      sum += this[ key ];
    }
  }
  console.log( sum );
}

// myFunction(); // this -> window

myFunction.apply( myObject, [ 9, 3, 5 ] ); // myObject의 a: 10의 10 + [9, 3, 5]의 9 + 3 + 5 = 28

