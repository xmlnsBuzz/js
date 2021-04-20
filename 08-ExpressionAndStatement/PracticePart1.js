/**
 * EXPRESSIONS
 */
10;
"abc";
5 + 3
  // NOTE 위의 선언(5+3)과 아래의 function 사이에 세미콜론을 지우면 아래 function에 error 난다.

  ; ( function ( a ) {
    console.log( a );
  } ) // Function expression embedded into th "()"

  // NOTE 여기도 마찬가지로 위 function과 아래 function 사이 어디든 semi-colon이 있어서 expression을 종결시켜야만 error가 안 난다.

    // Immediately invoked function expression
  ; ( function () {
    console.log( "Hello from IIFE" );
} )(); // Function call is expression
  
let a;
a = 10 // Assignment expression

4<=10<=20||5










