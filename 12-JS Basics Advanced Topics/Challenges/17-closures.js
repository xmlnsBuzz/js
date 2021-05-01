/**
 * CLOSURE
 *
 */
/* function outerFn () {
  const a = 10;

  function innerFn ( b ) {
    console.dir(innerFn)
    return a + b;
  }
  return innerFn;
}

const res = outerFn();
console.log( res( 20 ) );
 */

function outerFn ( mult ) {
  const a = 10;

  function innerFn ( b ) {
    console.dir( innerFn );
    return ( a + b ) * mult;
  }
  return innerFn;
}

const res1 = outerFn(2);
console.log( res1( 20 ) ); // innerFn(b)의 Scopes[3]을 펼쳐 볼 것.

const res2 = outerFn( 3 );
console.log( res2( 20 ) ); // innerFn(b)의 Scopes[3]을 펼쳐 볼 것.

