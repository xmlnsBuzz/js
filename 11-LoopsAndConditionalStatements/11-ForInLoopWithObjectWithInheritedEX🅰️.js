/**
 * For In Loop with Object with interited Properties
 */

const myObject = {
  a: "abc",
  b: true,
  c: null,
  d: 150
};


Object.prototype.globalProp = "Inherited property";
// 위와 같이 지정하면 이 문서에서 생성되는 모든 object 外에 "Inherited property" 가 global property로 덧 붙여진다.

for ( let key in myObject ) {
  console.log( key, myObject[ key ] );
  // const myObject = {  a: "abc", b: true, c: null, d: 150 }
}

const myObject2 = {};
console.log( myObject2.globalProp ); // "Inherited property"










