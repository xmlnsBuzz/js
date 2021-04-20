/**
 * AND Operator &&
 */
console.log( true && false );
console.log( false && true );
console.log( false && false );
console.log( true && true );
console.log( "--------------" );

console.log( "abc" && 10 && true && "efgh" && "abcd" );
console.log( "abc" && 10 ); // 10
console.log( 10 && true ); // true
console.log( true && "efgh" ); // efgh
console.log( "efgh" && "abcd" ); //abcd
console.log( "--------------" );

// AND return value of the first "falsy" operand
console.log( "abc" && 10 && false && "" && "abcd" ); // false
console.log( "abc" && 10 && NaN && "" && "abcd" ); // NaN
console.log( "abc" && 10 && "" && "abcd" ); // "" (empty string)

// 모든 operand가 true 일때 마지막 operand return
console.log( "abc" && 10 && true && 123 && "string" ); // string
console.log(null=="")














