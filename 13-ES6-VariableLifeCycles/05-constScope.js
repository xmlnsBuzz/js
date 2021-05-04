/**
 * Scope
 */
const a = 10;
console.log( a );

function fn () {
  console.log( a );
  const b = true;
  console.log( b );
}

fn();

// console.log(b)

{
  const b1 = "abc"; // Block Scope
  console.log( b1 );
}

for ( let j = 0; j <= 5; j++ ) {
  console.log( j );
}
// for loop에는 const를 변수로 못 쓴다. 왜냐하면 loop를 돌게 되면 변수에 할당된 값이 變하기 때문이다. const의 특성을 알면 이해가 된다.

/**
 * Reassignment
 */
const c = 1;
// c = 2;

function fn2 () {
  // c = 3; // not possible with const
}
fn2();


/**
 * Redeclaration
 */

// Global scope
const d = false;
console.log( d );

// function scope
function fn3 () {
  const d = 5;
  console.log( d );
}

fn2();

// Block scope
{
  const d = "abc";
  console.log( d );
}
// 위와 같이 scope를 달리하면 만사 OK!


/**
 * Hoisting
 */
/* 
const e;
e = 5;

function fn4 () {
  const f;
  f = 10;
  console.log( f );
}

fn4();
 */
// NOTE let과 마찬가지로 ES6의 변수선언 키워드인 let, const는 hoisting이 안된다.
// NOTE Hoisting은 var에만