/**
 * EXAMPLE 1
 * 
 * Global scope
 */
var a = 10;
let b = true;

console.log( a ); // 10
console.log( window.a ); // 10

console.log( b ); // true
console.log( window.b ); // undefined

const c = "abc";
console.log( c ); // abc
console.log( window.c ); // undefined

function myFunction ( a ) {
  console.log( a ); // undefined
  // a 값이 undefined인 이유는 "myFunction(a)"에서 parameter로 지정했기 때문에 local scope로 범위가 한정되므로해서, var a = 10;으로 할당한 값이 재정의(redefined) 되었기 때문이다.
  console.log( b ); // true
  // b 값은 parameter에 선언되지 않았으므로 위의 'let a = true;'가 그대로 적용된다.
}

console.log( myFunction );
/* 
ƒ myFunction( a ) {
  console.log( a );
} 
*/

console.log( window.myFunction );
/* 
ƒ myFunction( a ) {
  console.log( a );
} 
*/

myFunction()








