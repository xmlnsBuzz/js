/**
 * EXAMPLE 1 - Create object and modifiy it's properties
 */
// let myObject;

// myObject = {
//   a: 10,
//   b: "abc"
// };

// console.log( myObject );

// myObject.a = 15;

// console.log( myObject );

// myObject.c = true;

// console.log( myObject );

// delete myObject.b;

// console.log( myObject );

// console.log( myObject.a );

// /**
//  * CHALLENGE 1
//  * 
//  * Create variable called "myPost"
//  * Initial value should be {}
//  * Add porperty called "postTitle" and value "Object is reference type"
//  * Add one more property "postLinkes" with value 0
//  * Add third property "shared" and set it's value to "false"
//  * Increase value of "postLikes" by 1
//  * Delete property "shared"
//  */

// let myPost = {};
// myPost.postTitle = "Object is reference type";
// myPost.postLikes = 0;
// myPost.shared = false;


// console.log( myPost );

// myPost.postLikes = myPost.postLikes + 1;

// console.log( myPost );

// delete myPost.shared;

// console.log( myPost );

// let myObject = {
//   a: 10
// };

// let copyOfMyObject = myObject;
// copyOfMyObject.b = false;

// console.log( myObject );
// console.log( copyOfMyObject );


let myObject = {
  a: true,
  b: null,
  c: 25
};

console.log(myObject['a'])

console.log(myObject['b'])

// NOTE Square bracket과 .(dot) 을 사용하는 경우가 다른 이유를 깊이 살펴야 된다.
const propertyName = "c"

console.log(myObject[propertyName])

// NOTE 아래와 같이 quoting을 하면 
console.log(myObject["propertyName"])
// undefined 가 된다.

// NOTE [], and '.' 의 차이를 잘 설명함.
myObject[ "new" + "Property" + "Name" ] = "Value for dynamically computed property name"

console.log(myObject)
