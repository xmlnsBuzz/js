/**
 * "this" inside of the function
 */
// function myFunction () {
//   console.log( this );
// }

// myFunction();
// window.myFunction();
// IN strict mode
// "use strict";

// function myFunction () {
//   console.log( this );
// }

// myFunction(); // "this" is undefined in strict mode
// window.myFunction(); // "this" is equal to window in strict mode

/**
 * "this" inside of the methods of the Object
 */

const myObject = {
  name: "Alice",
  age: 20,
  greeting: function () {
    console.log( this ); // {name: "Alice", age: 20, greeting: f ...}
    console.log( "Name of the person is " + this.name + " and age is " + this.age ); // Name of the person is Alice and age is 20
  }
  // greeting() // NOTE Uncaught SyntaxError: Unexpected identifier 옵젝트 내부에서 실행했으므로 error
};

myObject.greeting();

// greeting(); // Uncaught ReferenceError: greeting is not defined

// NOTE console.dir() Object property들의 계층구조를 보여준다.
// NOTE refer velog님의 https://velog.io/@dlrmsghks7/LearnconsoleAPI
















