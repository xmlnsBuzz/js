/**
 * TASK 1
 * 
 * Function scopes
 */
const b = 2;
let d = 15;

function myFn1 ( a ) {
  let b;
  let d = 10;
  myFn2( b );
}

function myFn2 ( a ) {
  let c = 5;
  console.log( a, b, c, d );
}

myFn1();
myFn2();

