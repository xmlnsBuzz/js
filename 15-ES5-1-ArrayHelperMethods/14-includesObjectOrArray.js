/**
 * includes Object or Array
 */


/* #region  JSON.parse & JSON.stringify*/

// interface JSON {
//     / **
//   * JSON( JavaScript Object Notation ) 문자열을 객체로 변환합니다.
//      * @param text 유효한 JSON 문자열입니다.
//      * @param reviver 결과를 변환하는 함수.이 함수는 개체의 각 구성원에 대해 호출됩니다.
//      * 멤버에 중첩 된 개체가 포함 된 경우 중첩 된 개체는 상위 개체보다 먼저 변형됩니다.
//      * /;
// parse( text : string, reviver ?: ( this: any, key: string, value: any ) => any ) : any;
// / **
//   * JavaScript 값을 JSON( JavaScript Object Notation ) 문자열로 변환합니다.
//      * @param value 변환 할 JavaScript 값( 일반적으로 객체 또는 배열 ).
//      * @param replacer 결과를 변환하는 함수.
//      * @param space 쉽게 읽을 수 있도록 반환 값 JSON 텍스트에 들여 쓰기, 공백 및 줄 바꿈 문자를 추가합니다.
//      * /;

// NOTE stringify( value : any, replacer ?: ( this: any, key: string, value: any ) => any, space ?: string | number ) : string;
// / **
//   * JavaScript 값을 JSON( JavaScript Object Notation ) 문자열로 변환합니다.
//      * @param value 변환 할 JavaScript 값( 일반적으로 객체 또는 배열 ).
//      * @param replacer 문자열화할 개체 속성을 선택하기위한 승인 된 목록 역할을하는 문자열 및 숫자의 배열입니다.
//      * @param space 쉽게 읽을 수 있도록 반환 값 JSON 텍스트에 들여 쓰기, 공백 및 줄 바꿈 문자를 추가합니다.
//      * /;
// stringify( value : any, replacer ?: ( number | string )[] | null, space ?: string | number ) : string;
// }

// / **
//   * JavaScript 값을 JSON( JavaScript Object Notation ) 형식으로 변환하는 함수를 제공하는 내장 개체입니다.
//  * /;
// var JSON 선언: JSON;

/* #endregion */

// NOTE // ! case sensitive!!!
const tags = [
  [ "javascript", "es6" ],
  [ "css", "flexbox" ],
  [ "html", "web-browser" ]
];

const fruits = [
  { title: "Orange", quantity: 10 },
  { title: "Banana", quantity: 5 },
  { title: "Apple", quantity: 25 }
];

const primitiveTypesArray = [
  25,
  "x",
  true,
  undefined,
  null
];

/* Create a function "elementIsIncluded" with two parameters "searchElement" and "array". 

If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.

If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
*/

const elementIsIncluded = ( searchElement, array ) => {
  if ( typeof searchElement !== "object" ) {
    return array.includes( searchElement );
  }

  if ( typeof searchElement === "object" ) {
    return array
      .map( element => JSON.stringify( element ) )
      .includes( JSON.stringify( searchElement ) );
  }
};

console.log( elementIsIncluded( [ "css", "flexbox" ], tags ) ); // true
// ? console에서 JSON.stringify(["css", "flexbox"])라 입력하면
// ? "[\"css\",\"flexbox\"]" 가 나온다. 즉, number가 아닌 string은 \"(따옴표를 escape한) 로 wrapping한다.


console.log( elementIsIncluded( [ "flexbox", "css" ], tags ) ); // false

console.log(
  elementIsIncluded(
    { title: "Apple", quantity: 25 },
    fruits
  )
); // true

console.log( elementIsIncluded( { title: "Banana" }, fruits ) ); // false
// * 위가 true가 되려면 ({title: "Banana", quantity: 5}, fruits) 로 검색해야 된다. Case sensitive.

console.log( elementIsIncluded( 25, primitiveTypesArray ) ); // true
