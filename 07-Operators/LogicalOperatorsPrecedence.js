/**
 * Operator Precedence
 */
// p14 => Precedence 14 (Precedence는 숫자가 클수록 우선순위가 높다.)
console.log( 2 + 4 * 10 ); // 2 + (4*10) = 42 - +(p14), *(p15)
console.log( ( 2 + 4 ) * 10 ); // (2 + 4)*10 = 60 '()' grouping operator(P21), *(p15) 

let a;
a = 1;

a = a + 5;
console.log( a ); // 6, =(p3), +(p14)
