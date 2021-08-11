/**
 * Declaration and assignment using array destructing
 */

const myArray = [ 1, 2, 3 ];

/* NOTE 아래의 줄들을 destructing하면
let a, b, c;
a = myArray[ 0 ];
b = myArray[ 1 ];
c = myArray[ 2 ];
NOTE 아래와 같다 */

/* NOTE 이 것도
let [ a, b, c ] = myArray;
아래와 같이 */

let a, b, c;
[ a, b, c ] = myArray;
// NOTE 위의 2줄로 '반드시' 순서를 지켜 1.declaration 후 2.myArray에 destructing했다.

const anotherArray = [ 4, 5, 6 ];
[ a, b, c ] = anotherArray;

console.log( a, b, c );


