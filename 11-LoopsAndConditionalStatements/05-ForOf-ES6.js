/**
 * for of Loop
 * 
 * usage
 for (Element of Iterable) {
   // Action with specific Element
 }
 */
/* 
const myArray = [ true, 10, "abc", null ];

for ( let ele of myArray ) {
  console.log(ele)
}
// NOTE ele는 사용자 variable
 */

let myObject = {
  x: 10,
  y: true,
  z: "abc"
}

console.log("Object와 사용불가하다는 예")

for ( let prop of myObject ) {
  console.log(prop)
} // NOTE Uncaught TypeError: myObject is not iterable 
// NOTE for... of 는 object와 사용불가...


// 아래와 같이 사용하면 된다.
/* 
const myArray = [1,2,3,4]

for ( let prop of myArray ) {
  console.log(prop)
}
 */








