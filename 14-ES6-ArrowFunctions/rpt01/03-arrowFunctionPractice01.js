"use strict";

// // ! ;유의할 점 : Arrow function은 block scope가 '아닌' global scope다. 
// // ? 따라서 실행은 반드시 arrow function expression이 선언된 '후'에 해야만 한다.
// const sum = ( a, b ) => a + b;
// console.log( sum( 1, 3 ) );
// console.log( "______________" );

// Example 2
const post = {
  title: "Sample titles",
  comments: 10,
  shared: true,
  published: true,
  postId: 5234
};

// ? Explicit return of the object
// const processedPost = () => {
//   return {
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false
//   }
// };

// // ? Implicit return of the object
// const processedPost = () => ( {
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false
// } );

// console.log( processedPost() );
/* 
( () => {
  function greet () {
    return "Hey! What's up?";
  }
  console.log(this)
  this.greet = greet;
  return this
} )();
 */
// ? 윗 걸 줄이면
( () => {
  this.greet = () => "Hey! What's up?";
  console.log(this.greet)
  console.log(this)
  return this;
} )();

