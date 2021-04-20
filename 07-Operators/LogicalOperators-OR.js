/**
 * Logical Operators
 */

// || or operator

console.log( true || fasle ); // true
console.log( false || true ); // true
console.log( null || undefined ); // undefined
console.log( undefined || null ); // null

console.log( "__________" );

console.log( "abc" || "" ); // abc
console.log( "" || "abc" ); // abc
console.log( "" || "" ); // ""

// Falsy values
console.log( "" || 0 || null || undefined || NaN || false );
// false(위의 마지막 값 'false')
console.log( "" || 0 ); // 0
console.log( 0 || null ); // null
console.log( null || undefined ); // undefined
console.log( undefined || NaN ); // NaN
console.log( NaN || false ); // false
console.log( "__________" );
console.log( "__________" );

let city;
const defaultCity = "New York"; 
let myCity = city || defaultCity;
console.log( myCity ); // New York

// city = "Los Angeles";
// myCity = city || defaultCity;
// // NOTE 같은 variable을 let으로 중복선언하면 에러가 난다.
// console.log( myCity );

console.log( "__________" );

let myOtherCity = city || console.log( "Fill in city please." ) || defaultCity; // console.log( "Fill in city please." )는 statement이르로 내용을 logging한다.

console.log( myOtherCity ); // New York

console.log( "__________" );
city = "Los Angeles";
myCity = city || defaultCity;
// NOTE 같은 variable을 let으로 중복선언하면 에러가 난다.
console.log( myCity ); // Los Angeles

