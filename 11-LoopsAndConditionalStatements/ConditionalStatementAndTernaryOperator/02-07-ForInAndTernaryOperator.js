/**
 * For in loop
 * 
 * TASK
 * Make "for in" loop iterate only over own properties of the myObject
 * // NOTE MDN의 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in#%EC%99%9C_for...in%EC%9D%84_%EC%82%AC%EC%9A%A9%ED%95%A9%EB%8B%88%EA%B9%8C 
 * 와 hasOwnProperty :
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * 참조할 것.
 */
const myObject = {
  name: "Mike",
  age: 30,
  city: "London"
};

Object.prototype.country = "England";
// NOTE prototype property는 global, local, block 등 모든 scope에서 접근가능하다.

for ( let key in myObject ) {
  // hasOwnProperty(key)에 의해 myObject 자체가 소유한 property들만 선택한다
  if ( myObject.hasOwnProperty( key ) ) {
    console.log( myObject[ key ] );
  }
  // NOTE 따라서 "Engladn" 도 출력된다.
}















