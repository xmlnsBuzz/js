/**
 * CallBacks, events, events queue, execution contexts stack, web APIs
 */

// 아래를 원격서버에 요청하여 응답받는 web API라 가정한다. 예를 들어 날씨, 결제서버 등등으로 부터...
function waitingFn ( timeInMs ) {
  const futureTime = Date.now() + timeInMs;
  while ( futureTime > Date.now() ) {
    // Waiting... 위의 조건(futureTime > Date.now())이 만족될 때까지 아무런 동작도 할 수 없다.
  }
}

setTimeout( () => console.log( "CallBack is executed" ), 0 );

waitingFn( 3000 ); // while loop때문에 지정한 3000ms 대기 후 아래 내용 실행

// 

console.log( "Last statement in the global execution context" );
// 실행하는 동안 index.html의 'Click me!!!' button을 여러 차례 클릭하면 중간에 낀다.


/* #region  ZeroCho https://www.zerocho.com/category/JavaScript/post/597f34bbb428530018e8e6e2 에서 */
/* function run () {
  console.log( '동작' );
}
console.log( '시작' );
setTimeout( run, 0 );
console.log( '끝' ); */
/* #endregion */