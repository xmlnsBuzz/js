/**
 * Challenge
 * 
 * Events and Events Queue
 */
function waitingFn ( timeInMs ) {
  const futureTime = Date.now() + timeInMs;
  while ( futureTime > Date.now() ) {
    // Waiting... 위의 조건(futureTime > Date.now())이 만족될 때까지 아무런 동작도 할 수 없다.
  }
}

waitingFn( 3000 );
console.log( "Function call has just ended." ); // 3000MS 후에 console에 logging 된다.

// NOTE Javascript는 single thread language이다. 