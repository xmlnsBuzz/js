/**
 * for (key in Object)
 * 
 * usage
 * for ( let key in myObject ) {
 * console.log(key, myObject[key])
 * }
 * 
 */

/* const myObject = {
  x: 10,
  y: true,
  z: "abc"
};

for ( let key in myObject ) {
  console.log(key, myObject[key])
} */


const myArray = [ true, 10, "abc", null ];

for ( let k in myArray ) {
  console.log( myArray[k] );
}

// k 는 사용자가 지정하는 variable이다. k, key etc...
// NOTE 
/* 
for iteration over objects you could use for in loop.
but keep in mind that it iterates also over interited properties

객체에 대한 반복을 위해 for in 루프를 사용할 수 있습니다.
그러나 interited 속성에 대해서도 반복된다는 것을 명심하십시오.;
 */