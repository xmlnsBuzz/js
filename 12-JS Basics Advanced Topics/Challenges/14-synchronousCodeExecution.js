/**
 * CHALLENGE
 * Create a function "waitingFn" with single parameter "timeInMs" and inside of the function create "while" loop and this loop should be running during "timeInMs".
 * 
 * HINT: Date.now() - current time in ms since 1970
 */

function waitingFn ( timeInMs ) {
  const futureTime = Date.now() + timeInMs;
  while ( futureTime > Date.now() ) {
    // Waiting... 위의 조건(futureTime > Date.now())이 만족될 때까지 아무런 동작도 할 수 없다.
  }
}

waitingFn( 3000 );
console.log("Function call has just ended.") // 3000MS 후에 console에 logging 된다.