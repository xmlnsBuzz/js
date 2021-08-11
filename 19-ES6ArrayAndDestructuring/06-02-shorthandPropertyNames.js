/**
 * Example 1 - Declaration and assignment using destructuring object and shorthand property names
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

// const { a: a, b: b } = myObject;
// NOTE 위를 아래와 같이 더 줄일 수 있다.

// const { a, b } = myObject;
// NOTE 또한 이 것은 아래처럼도 가능하다.

let a, b;
( { a, b } = myObject );
// NOTE 여기서 유의할 점은 위 라인 전체를 ()로 묶지 않을 경우 {}가 나타나면 js engine이 {} 를 object literal이 아닌 block으로 간주하기 때문에 위 line을 behavior시키기 위해서는 ()로 묶어 object literal로 바꿔야 된다. 

console.log( a, b );

const anotherObject = { a: 20, b: 5 };
// NOTE 위 라인 끝의 세미컬런은 ctrl+f로 자동삽입되지 않는다. 유의하자.
  ( { a, b } = anotherObject );

console.log( a, b );