/**
 * Example 5 - Change order of the properties
 */

const myObject = {
  a: 10,
  b: true
};

const { b, a } = myObject;

console.log( a, b ); // 10 true
// 위와 같이 결과는 a,b 순이다. 즉 순서보다 object name이 우선이다.