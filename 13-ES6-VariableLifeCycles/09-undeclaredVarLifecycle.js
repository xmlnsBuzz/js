/**
 * Undeclared Variable LifeCycle
 * ? 변수를 선언하지 않고
 * a = 10;
 * * 와 같이 global scope에 사용했을 경우 "declaration", "initialization" 그리고 "assignment" 가 단계별로 즉시 실행된다.
 */
function fn () {
  function fn2 () {
    // console.log( a ); // 여기 있으면 에러.
    /** 
     * ! 아래 같은 에러 남.
     * 09-undeclaredVarLifecycle.js:9 Uncaught ReferenceError: a is not defined
     * at fn2 (09-undeclaredVarLifecycle.js:9)
     * at fn (09-undeclaredVarLifecycle.js:13)
     * at 09-undeclaredVarLifecycle.js:16
     */
    a = 10; // 위의 console.log(a)를 아래에 찍어야 됨.
    console.log( a ); // 10 -> 여기에 있어야 10
  }

  fn2();
  console.log( a ); // in a function scope
}

fn();
console.log( a ); // in a global scope





















