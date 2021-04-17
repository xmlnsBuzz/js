function myFunction ( a ) {
  console.log( a );
  return a; // return 후 function은 끝난다. 따라서 아래의 console.log 이하는 무시한다.
  console.log( a );
  const c = 10;
  console.log( c );
}

myFunction( 10 );