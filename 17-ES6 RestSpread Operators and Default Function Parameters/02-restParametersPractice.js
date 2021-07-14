/**
 * Rest parameters Practice
 * // ! (a,b,...rest)처럼 rest parameter를 끝에 쓸 수는 있지만
 * // ! (...rest, a, b), (a, ...rest, b)와 같이 앞이나 중간에 쓸 수는 없다.
 * // ! rest parameter는 반드시 괄호() 속에 넣어야 된다.
 * // ? map, reduce 등의 method들에 사용하려고 만든 것 같다.
*/
const sumNumbers = ( ...nums ) => {
  console.log( nums );
};

sumNumbers( 1, 2, 3, 4 );

console.log( "____________" );

const sumNumbers2 = ( a, ...nums ) => {
  console.log( a );
  console.log( nums );
};

sumNumbers2( 1, 2, 3, 4 );
console.log( "____________" );

const sumNumbers3 = ( a, b, ...nums ) => {
  console.log( a );
  console.log( b );
  console.log( nums );
};

sumNumbers3( 1, 2, 3, 4 );

console.log( "____________" );

// NOTE with reduce
const sumNumbers4 = ( ...nums ) => {
  console.log( nums );
  return nums
    // filter로 num === "number"인 element만 거른다.
    .filter(num => typeof num ==="number")
    .reduce( ( sum, num ) => sum + num );
};

console.log( sumNumbers4("abd", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ) );



