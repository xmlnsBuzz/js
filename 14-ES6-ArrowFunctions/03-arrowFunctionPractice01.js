"use strict";

const sum = ( a, b ) => a + b;
console.log( sum( 1, 3 ) );

const post = {
  title: "Sample title",
  comments: 10,
  shared: true,
  published: true,
  postId: 5134
};

// ? Explicit return of the object
// const processPost = ( post ) => {
//   return {
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false
//   };
// };
// NOTE // ! 위를 줄이면 

// ? Implicit return of the object
// const processPost = ( post ) => (
//   {
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false
//   }
// );
// ! 이렇게 된다. 즉, { return -> '(' , } -> ')' 으로 대치되어 묵시적(implicit) expression이 된다.

// * ( post )의 괄호도 생략되어 post가 되면
const processPost = post  => ({
    title: post.title,
    comments: post.comments,
    popular: post.comments > 5 ? true : false
  });
// ? 위와 같이 된다.

console.log( processPost( post ) );
