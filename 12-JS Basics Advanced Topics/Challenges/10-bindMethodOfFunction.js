/**
 * BIND methods
 */

const myObject = {
  a: 10,
  b: null
};

function myFunction ( a, b ) {
  console.log( a + b );
  console.log( this );
}

const customFunction1 = myFunction.bind( myObject, 10, 3 ); // Preset "this" and both arguments

customFunction1(); // 13 { a: 10, b: null; }

const customFunction2 = myFunction.bind( myObject ); // Preset only "this"

customFunction2( 20, 6 ); // call with custom arguments -> 26 { a: 10, b: null; }

const customFunction3 = myFunction.bind( myObject, 50 ); // Preset only "this"

customFunction3( 6 ); // call with custom arguments -> 26 { a: 10, b: null; }

// NOTE bind() 할 때는 arguments를 하나라도 빠뜨리면 안된다. 예를 들어 myFunction3에 (myObject), customFunction3(6) 처럼 , 50이 빠지면 "NaN"이 나온다. customFunction 3에서 (myObject, 50)과 (6)을 (myObject), (50, 6)으로 해도 상관없다. 두 가지를 더할 때 arguments의 갯수만 맞으면 된다.














