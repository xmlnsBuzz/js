const myArray = [ 1, true, "abc" ];

// ! don't use "for"
for ( let i = 0; i < myArray.length; i++ ) {
  console.log( myArray[ i ] );
}

// ! Use "forEach" instead
// const result = myArray.forEach( elem => console.log( elem ) );
// console.log( result ); // * 1, true, abc, undefined
myArray.forEach( elem => console.log( elem ) );

// console.log( elem ); // ? Uncaught ReferenceError: elem is not defined