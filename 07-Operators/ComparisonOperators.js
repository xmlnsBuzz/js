/**
 * Comparison Operators
 */

// Numbers comparison
let a, b;
a = 5;
b = 7;
c = 5;


console.log( a < b );
console.log( a > b );

console.log( a <= c );
console.log( a >= c );

// Strings comparison
let myStr1, myStr2, myStr3;
myStr1 = "abc";
myStr2 = "bcd";
myStr3 = "Bcd";
// NOTE 위 문자열 3개를 sort하면 "Bcd", "abc", "bcd" 順序이다. 문자열 Comparison에서 sort가 우선되는 문자가 뒤에 오는 문자보다 작은 것으로 판별한다.

console.log( myStr1 > myStr2 ); // false
console.log( myStr1 < myStr2 ); // true
console.log( myStr1 > myStr3 ); // true
