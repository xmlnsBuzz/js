# 중요해서...

## 
> format : reduce( (f), [accumulate해서 축적시킬 array pointer] )
(f) 
( postsIds, post ) => {
    if ( post.comments >= minimalCommentsQty )
      postsIds.push( post.postId );
    return postsIds;
}
[]
축적시킬 빈 array
