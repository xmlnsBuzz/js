/**
 * Create Object with "new" keyword
 */

const myArray1 = [];
console.log( myArray1 instanceof Array );
console.log( myArray1 );

const myArray2 = new Array();
console.log( myArray2 instanceof Array );
console.log( myArray2 );

const myArray3 = [ 1, 2, 3 ];
const myArray4 = new Array( 1, 2, 3 );
console.log( myArray3, myArray4 );

const myString1 = "abc";
const myString2 = new String( "abc" );
// NOTE new keyword로 생성한 string은 global object이며 index(0: "a", 1: "b", 2:"c"), length 등과 함께 해당 prototype들을 갖는다.
console.log( myString1 ); // "abd"
console.log( myString2 ); // String {"abc"}
console.log( myString1 instanceof String ); // NOTE false, 여기서 String은 String Object를 의미한다. myString1은 단순히 string data이다.
console.log( myString2 instanceof String ); // true

console.log( typeof myString1 ); // string
console.log( typeof myString2 ); // object

// NOTE myString2에 적용할 수 있는 toUpperCase() function을 사용하여 아래와 같이 "abc"를 "ABC"로 변형해 보자.
console.log( myString2.toUpperCase() ); // ABC
console.log( myString1.toUpperCase() ); // ABC

console.log( myString2.length ); // 3
// myString1은 단순한 string 데이터타입이지만 자동으로 String Object로 변환시켜서 lenght를 찾아준다.
console.log( myString1.length ); // 3










