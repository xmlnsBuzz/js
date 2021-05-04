/**
 * Temporal Dead Zone(TDZ)
 * 
 * ? Accessing variable in the Temporal dead zone (TDZ) will lead to the following error
 * ! ReferenceError: Variable is no defined
 * ! CONST 는 반드시 선언과 초기와 할당을 동시에 해 주어야 됨.
 */
// ? 아래와 같이 선언만 하면 TEMPORAL DEAD ZONE 상태이다.
// const a; // NOTE // ? Declaration만 됨. 
// ! Uncaught SyntaxError: Missing initializer in const declaration
"use strict";
const a = 10; // ? declaration, initialize and assignment
console.log( a );
// * 위 2 라이의 순서가 바뀌면 ReferenceError다. 하지만 Declaration은 된 상태...

{
  const b = 1;
  console.log( b );
}

console.log( b ); // ! Uncaught ReferenceError: b is not defined












