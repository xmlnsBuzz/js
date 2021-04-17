/**
 * EXAMPLE 4
 * 
 * Missing properties
 */
const myObject = {
  a: 3,
  b: true
};

console.log( myObject.c );
// Undefined

console.log( myObject.absentProperty );
//  Undefined

// console.log( nonDeclaredVariable );
// Uncaught ReferenceError: nonDeclaredVariable is not defined

// NOTE Variable declaration이 된 property와 아예 선언조차 되지 않은 property는 에러가 다르다.

// NOTE 변수가 선언된 경우는 code실행이 계속되고, 안된 경우는 그 위치에서 나머지 code의 실행이 중지된다.

// NOTE IMPORTANT!!! NEVER ASSIGN "Undefined" to any property or variable MANUALLY!!!
// NOTE 대신 빈 값을 사용하려면 "null"을 사용할 것.
myObject.newPropertyWithUndefinedValue = undefined; // 이 곳이 '위'

console.log( myObject );
// {a: 3, b: true, newPropertyWithUndefinedValue: undefined}
// a: 3;
// b: true;
// newPropertyWithUndefinedValue: undefined

console.log( myObject.newPropertyWithUndefinedValue );
// Undefined

// NOTE 'Undefined'를 '위'와 같이 직접 assign해서는 "절대" 안된다.
// NOTE 왜냐하면 js engine이 undefined로 해석한 것인지가 구분 안되기 때문이다.





