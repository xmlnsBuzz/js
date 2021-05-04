/**
 * 
 Scope
 *
 */

var a = 10;
console.log( a );
// a -> global scope
function fn () {
  var b = true;
  console.log( "----------------------------" );
  console.log( b );
  // b -> function scope
}

fn();
// console.log(b)


// ------------------------------------------------------------
console.log( "----------------------------" );
/**
 * Reassignment
 */
var c = 1;
c = 2;

function fn2 () {
  c = 3;
}
fn2();
console.log( c );


// ------------------------------------------------------------
console.log( "----------------------------" );

/**
 * Redeclaration
 */
var d = false;
var d = true;

function fn3 () {
  var d = 5;
}
console.log( d ); // Global scope로 선언한 'var d = true;'가 우선이다.

// ------------------------------------------------------------

/**
 * Hoisting
 */
e = 5;
var e;

// NOTE Scope, Reassignment, Redeclaration, Hoisting






















