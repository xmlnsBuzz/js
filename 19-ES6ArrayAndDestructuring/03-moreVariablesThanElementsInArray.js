// NOTE 10가지 형태의 array destructuring

/**
 * More variables than elements in array
 */
/* const myArray = [ "a", "b" ];
const [ a, b, c ] = myArray;
console.log( a, b, c );
 */

/**
 * Default value
 */
/* const myArray = [ "a" ];
const [ a, b, c ="c"] = myArray; // NOTE c = "c"가 default value다
console.log( a, b, c );

 */

/**
 * // NOTE Skip element during destructuring
 */

// const myArray = [ 1, 2, 3, 4, 5 ];
// const [ , , a, , b ] = myArray;
// console.log( a, b );


/**
 * // NOTE Rest Operator in array destructuring
 */
/* 
const myArray = [ 1, 2, 3, 4, 5 ];
const [ a, b, ...c ] = myArray; // rest operator
console.log( a, b, c );
const d = [ ...c ]; // spread operator
// NOTE result - 1 2 Array( 3 )[ 3, 4, 5 ]
console.log( d );
d.push(6)
console.log(d)
 */

/**
 * // NOTE Delete first element of array
 */
// 


/**
 * // NOTE Swap values
 */

/* let x = 5, y = 10;
[ x, y ] = [ y, x ]; // NOTE '=' 왼쪽은 variables, '=' 오른쪽은 values
console.log( x, y );
 */

/**
 * // NOTE Destructuring in the function
 */
/* 
const myPosts = [
  [ "Post 1", 10 ],
  [ "Post 2", 20 ]
];
myPosts.forEach(([title, likes])=> console.log(`${title} has ${likes} likes`) )
 */

/**
 * // NOTE Nested array destructuring
 */
const myArray = [ 1, 2, [ 3, 4 ] ];
const [ a, b, [ c, d ] ] = myArray;
console.log( a, b, c, d );




