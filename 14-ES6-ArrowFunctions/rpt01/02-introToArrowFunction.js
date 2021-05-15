/**
 * Regular function to Arrow function
 */
// Anonymous function expression
function ( a, b ) {
  return a + b;
}

// Convert function above to Arrow function 
( a, b ) => a + b; // 이 것은 expression 이고,
( a, b ) => {
  return a + b; // 이 것은 statement
};

a => a * a;
() => 2;

( a, b ) => {
  return {
    a1: a,
    b1: b
  };
};

( a, b ) => { // NOTE 이 것과
  a1: a,
    b1: b;
};// 이 것만 있으면 function body로 인식되므로 아래와 같이

// '(round bracket)'(parenthesis)로 묶어준다
( a, b ) => ( {
  a1: a,
  b1: b
} );

// files://2-introToArrowFunction.md(참조)





