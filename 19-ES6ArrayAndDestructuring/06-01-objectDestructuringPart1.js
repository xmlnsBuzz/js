/**
 * Example 1 - Declaration and assignment using destructuring object
 */

const myObject = {
  a: 10,
  b: true
};
// 이 것을 아래와 같이
/* 
const a = myObject.a;
const b = myObject.b;
 */

// NOTE 이 것을 간단하게 아래와 같이 줄일(destructuring) 수 있다. 인수를 curly brace로 묶는 것에 유의.

const { a: a, b: b } = myObject;

console.log( a, b );






