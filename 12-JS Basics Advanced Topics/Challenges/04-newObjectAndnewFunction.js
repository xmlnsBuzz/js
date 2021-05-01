/**
 * new Object , new Function
 */

const myObject = new Object( { a: 10, b: true } );

console.log( myObject ); // {a:10, b:true}

console.log( myObject instanceof Object ); // true
console.log( typeof myObject ); // object

const myObject2 = { a: 10, b: true };
console.log( myObject2 );

const myFunction1 = function ( a ) {
  console.log( a );
};

myFunction1( "Hello" );
console.log( myFunction1 ); // 펑션 수식이 그대로 나온다
console.log( myFunction1 instanceof Function ); // true
console.dir( myFunction1 ); // NOTE f myFunction -> twirl open해서 내용을 볼 것.

const myFunction2 = new Function( "a", "console.log(a);" );
console.log(myFunction2)



