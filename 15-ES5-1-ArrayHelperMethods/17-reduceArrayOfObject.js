/**
 * reduce( (f), [accumulate해서 축적시킬 array pointer] )
 * (f) 
 * --> 
 * ( postsIds, post ) => {
    if ( post.comments >= minimalCommentsQty )
      postsIds.push( post.postId );
    return postsIds;
  }
  <--
 * 
 * reduce()는 array에서 조건등이 맞는 element가 있으면 축적해 나간다.
 */
const posts = [
  {
    title: "How to find JavaScript developer job?",
    postId: 3421,
    comments: 25
  },
  {
    title: "Is it hard to learn ES6?",
    postId: 5216,
    comments: 3
  },
  {
    title: "Should I learn React or Angular?",
    postId: 8135,
    comments: 12
  }
];

const minimalCommentsQty = 10;

/* Create a function "popularPostsIds" with two parameters "posts" and "minimalCommentsQty".

This function "popularPostsIds" should return an array of postIds of posts that have quantity of "comments" at least equal to "minimalCommentsQty"
*/

const popularPostsIds = ( posts, minimalCommentsQty ) => 
  // posts.reduce( (), [] );
  posts.reduce( ( postsIds, post ) => {
    // postsIds, post는 reduce()안에서 사용할 custom variable
    if ( post.comments >= minimalCommentsQty )
      postsIds.push( post.postId );
    return postsIds;
  }, [] );

  // posts는 위의 array
  // post 위의 array objects 중 한개의 unit
  // postsIds 는 postId들을 accumulate한 array들


// @ts-ignore
console.log( popularPostsIds( posts, minimalCommentsQty ) ); // [3421, 8135]

