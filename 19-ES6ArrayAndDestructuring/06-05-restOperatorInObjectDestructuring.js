/**
 * Example 6 - rest operator in object destructuring
 */

const myObject = {
  a: 10,
  b: true,
  c: [],
  d: "abc",
  e: 20
};

// const { a, b, ...rest } = myObject;
// console.log( a, b, rest ); // 10 true >Object
// NOTE result
/* 
10 true

> Object { c: [], d: "abc", e: 20 }
c: Array []
d: "abc"
e: 20
*/
// NOTE c, d, e는 rest Object 로 묶여져 있다.

const { b, d, ...rest } = myObject;
console.log( b, d, rest );
// NOTE result
/* 
true abc
> Object { a: 10, c: [], e: 20 }
a: 10
c: Array []
e: 20
*/
// NOTE 위의 결과는 13,14 라인을 commenting 시켜야 에러가 안 난다. 즉 두번 지정할 수 없다는 뜻인 것 같다.