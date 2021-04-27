/**
 * Regular 'for' loop
 */

/* NOTE
let -> 재선언 할 수 없다. const -> 당연히 더 안된다. But~ var -> 재선언 가능.
*/

for ( let i = 0; i < 5; i++ ) {
  console.log( i );
}
console.log( i ); // Uncaught ReferenceError: i is not defined, for 속의 i는 for loop속의 local scope이므로 global scope에서 사용하면 에러다.