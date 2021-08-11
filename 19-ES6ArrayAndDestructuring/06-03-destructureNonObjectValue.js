/**
 * Example 4 - Destructuring non-object value
 */

// const { a, b } = null; // Uncaught TypeError: null has no properties
// NOTE 위와 같은 에러가 난다. 에러를 피하기 위해서는

const val = undefined;
const { a, b } = val || {}; // undefined undefined
// 위의 것은 아래처럼
// NOTE const { a, b } = {};로 바꿔도 같은 결과 undefined undefined를 얻는다
console.log( a, b );

const myArray = [ 1, 2 ];
const { length, d } = myArray; // ? NOTE array는 자체로 object로 취급된다
console.log( length, d );