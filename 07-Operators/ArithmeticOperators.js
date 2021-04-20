let a, b;
a = 1;
b = 2;

// Math with numbers
console.log( a + b ); // 3
console.log( a * b ); // 2
console.log( a / b ); // 0.5
console.log( a - b ); // -1

a = "abc";
b = 5;

// Math with non-numbers
console.log( a + b ); // abc5 - string concat
console.log( b + a ); // 5abc - string concat
console.log( a * b ); // NaN
console.log( a / b ); // NaN
console.log( a - b ); // NaN

a = "Hello";
b = "world";

// String concatenation
console.log( a + " " + b );

c = "1";
console.log( +c * 50 ); // 50 : 1 * 50
// NOTE Unary plus: '1'이 string이라도 앞에 + unary가 붙으면 number가 되는 것에 유의하자. 이런 경우가 흔할까?
console.log( Number( c ) );
c = undefined;
console.log( +c ); // NaN

// Unary minus
c = "1";
console.log( -c );

// NOTE ++a 1을 더한 값을 반환
let d = 5;
console.log( d++ ); // 5
console.log( d ); // 6

// NOTE a++ a값을 반환한 후에 1을 더함
let e = 5;
console.log( ++e ); // 6
console.log( e );  // 6

let f = 5;
console.log( --f ); //4
console.log( f ); //4

let g = 5;
console.log( g-- ); // 5
console.log( g ); // 4