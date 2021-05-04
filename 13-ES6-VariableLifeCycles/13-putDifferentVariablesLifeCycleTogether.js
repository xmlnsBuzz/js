/**
 * putDifferentVariablesLifeCycleTogether
 * // NOTE compilation=and-execution-demo // ! branch를 참조할 것.
 */
a = 2;
const b = 5;

const sum = function ( a, b ) {
  return a + b;
};

if ( b > a ) {
  let multResult = mult( a, b );
  finalResult = multResult;
} else {
  let sumResult = sum( a, b );
  finalResult = sumResult;
}

var a; // ? GS

function mult ( a, b ) {
  result = a * b;
  return result;
  var result;
}

console.log( finalResult );

// NOTE compilation.js와  execution.js 를 오른쪽에 놓고 단계별로 음미해 볼 것.