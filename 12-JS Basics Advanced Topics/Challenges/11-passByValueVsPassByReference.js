/**
 * Pass by value VS pass by refernce
 */

// If variable that holds value of primitive value type is passed to the fuction as argument, it's value can't be changed inside of the function
// 번역 : '프리미티브 값 유형'의 값을 보유한 변수가 '인수'로 함수에 전달되면 함수 내에서 값을 변경할 수 없다.

/**
 * Pass by value
*/

/*
function myFunction ( parameterA ) {
  parameterA = "abc"; // primitive type value
  return parameterA;
}

const a = 10;

console.log( myFunction( a ) ); // 20 const a = 10;으로 할당한 값을 pass하지 "않는다!"
console.log( a ); // 10 당연히 10을 pass 시킨다. 
 */

/**
 * Pass by Reference
 */
const myArray = [ 1, 2, 3 ];

console.log( myArray ); // (3) [1, 2, 3] 당연함.

function myFunction ( arr ) {
  console.log( arr === myArray ); // true
  arr.push( 4 );
  console.log( arr );
  return arr;
}

console.log( myArray ); // (3) [1, 2, 3] -> push 되기 前 이므로
myFunction( myArray ); // (4) [1, 2, 3, 4] -> push 됨
console.log( myArray ); // (4) [1, 2, 3, 4] -> push 되어서 '4'를 끼워넣고 난 後 이므로







