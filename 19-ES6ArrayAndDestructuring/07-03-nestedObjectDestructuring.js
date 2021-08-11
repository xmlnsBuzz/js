/**
 * Example 10 - Nested object destructuring
 */

const myObject = {
  a: 1,
  b: 2,
  nestedObject: {
    c: 3,
    d: 4
  }
};

// NOTE nest 상태에서 해체
/* 
const { a: a, b: b, nestedObject: nestedObject } = myObject;
console.log( a, b, nestedObject ); // 1 2 Object { c: 3, d: 4; }
 */

// NOTE 결과가 1, 2, 3, 4 -> a,b,c,d 순으로 나오게 하려면
/* 
const { a: a, b: b, nestedObject: nestedObject } = myObject;
const { c: c, d: d } = nestedObject;
console.log( a, b, c, d );
 */
// NOTE 위와 같이 nestedObject를 따로 해체시켜준다

// NOTE 이 것은 다시 아래처럼 단축할 수 있다.
const {
  a: a,
  b: b,
  nestedObject: {
    c: c,
    d: d
  }
} = myObject;
console.log(a,b,c,d);