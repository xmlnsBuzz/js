/**
 * LET -> "let" can be reassigned but cannot redeclarated.
 */

/**
 * Scope
 */
let a = 10;
console.log( a );

function fn () {
  let b = true;
  console.log( b );
}

fn();

// console.log(b)
/* 
{
  let b1 = 1; // Block Scope
}

console.log( b1 );
 */
// NOTE var과 let의 차이 -> Block Scope에서 var b1=1;은 에러가 없지만, let b1 = 1;은 Uncaught ReferenceError를 낸다.

for ( var j = 0; j <= 5; j++ ) {
  console.log( j );
}

// console.log( j ); // NOTE let j = 0;에서 let 때문에 error
console.log( j );

/**
 * Reassignment
 */

let c = 1;
c = 2;

function fn2 () {
  c = 3;
}
fn2();


/**
 * Redeclaration
 */
let d = false;
// let d = true;
console.log( d );

function fn3 () {
  let d = 5; // NOTE function scope이므로 redeclaration해도 no error.
  console.log( d );
}

fn3();

{
  let d = "abc";
  console.log( d );
}

/**
 * Hoisting
 * // NOTE ES6의 let은 HOISTING이 안된다. // NOTE
 */
let e;
e = 5;


function fn4 () {
  let f;
  f = 10;
  console.log(f)
}
fn4(); // NOTE Uncaught RefereceError HOISTING이 안되므로...

/* 
function fn4 () {
  console.log( f );
  var f;
  f = 10;
}
fn4(); // NOTE undefined
 */










