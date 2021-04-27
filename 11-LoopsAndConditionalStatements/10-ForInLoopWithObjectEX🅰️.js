/**
 * "For In" Loop with Object
 * 모든 key & key value 등을 나열시킨다.
 */

const myObject = {
  a: "abc",
  b: true,
  c: null,
  d: 150
};

for ( let key in myObject ) {
  console.log( `${key} : ${myObject[ key ]}` );
}