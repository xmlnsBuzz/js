/**
 * Example 7 - non-existing properties
 */
// 실제하지 않는 object 처리
const myObject = {
  a: 10,
  b: true
};

const { a, b, c } = myObject;
console.log( a, b, c ); // 10 true undefined