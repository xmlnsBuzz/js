/**
 * ! map() JSON to Object
 */

// NOTE interface JSON {
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
// stringify( value : any, replacer ?: ( this: any, key: string, value: any ) => any, space ?: string | number ) : string;
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

const postsJSON = [
  '{"postId": 1355, "commentsQuantity": 5}',
  '{"postId": 5131, "commentsQuantity": 13}',
  '{"postId": 6134, "commentsQuantity": 2}'
];

/* 
Form the "postsJSON" array create "posts" array that will consist of JavaScript objects
*/
// // ? for loop 
// ! 아래의 var를 사용한 이유는 추후 push, delete 등을 사용하여 JSON object에 대한 수정이 가능하기 때문이다.
// var posts = [];
// for ( let i = 0; i < postsJSON.length; i++ ){
//   posts.push(JSON.parse(postsJSON[i]))
// }

// // ? map() - Options 1
// // ! 아래의 const를 사용할 경우 JSON data에 변동이 있으면 않된다. 따라서 변동없을 데이터에 만 아래의 경우를 사용한다.
// const posts = postsJSON.map( JSON.parse );

// ? map() - Options 2
const posts = postsJSON.map( post=> JSON.parse(post) );




console.log( posts );
console.log( posts[ 0 ].postId );













