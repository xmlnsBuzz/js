/* // call method - custom "this"
const myObject = {
  a: 10,
  b: null
};

function myFunction () {
  console.log( this );
}

myFunction(); // this -> window

myFunction.call( myObject ); // this -> {a: 10, b: null}

 */
/* 
// call method - custom "this" and arguments
const myObject = {
  a: 10,
  b: null
};

function myFunction ( a, b ) {
  console.log( a + b );
  console.log( this );
}

// myFunction(); // this -> window

myFunction.call( myObject, 10, 3 ); // this -> {a: 10, b: null}
 */

/**
 * CALL - call method of the object with other object as "this"
 */
const person1 = {
  city: "New York",
  name: "Bob",
  info: function () {
    console.log( this.name + " lives in " + this.city );
  }
};

const person2 = {
  city: "Paris",
  name: "Alice"
};

person1.info(); // Bob lives in New York
person1.info.call( person2 ); // Alice lives in Paris
// NOTE // NOTE 정말 중요한 개념이다. // NOTE  // NOTE
// person1에 선언한 function을 불러내어(call) person2의 object에 적용한다.
