/**
 * CHALLENGE 3
 * 
 * Create function"outerFunction" with 2 parameters
 * Create function inside of the "outerFunction" and name it "innerFunction" with 1 parameter
 * This "innerFunction" will return square of parameter (parameter * parameter).
 * 
 * In the "outerFunction" sum both parameters.
 * Call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction".
 * Log to the console result of the "innerFunction" call
 */

/* 
function outerFunction ( a, b ) {
  function innerFunction ( c ) {
    return c * c;
  }
  const sum = a + b;
  // NOTE 아래가 정말 중요한 개념이다. const로 변수를 만들어 function결과를 저장한다.
  // 물론 console.log( innerFunction(sum) ); 도 결과는 마찬가지다
  const result = innerFunction( sum );
  console.log( result );
} 
*/

// NOTE 위를 축약한 버전
function outerFunction ( a, b ) {
  function innerFunction ( c ) {
    return c * c;
  }

  console.log( innerFunction( a + b ) );
}

outerFunction( 3, 4 );


