/**
 * NOT operator !
 */

console.log( !"abc" ); // false
console.log( !"" ); // true
console.log( !0 ); // true

console.log( "---------" );

let myVariable;
myVariable = undefined;
console.log( !myVariable );

myVariable = "Bordan";
console.log( !myVariable );

console.log( "---------" );

// Quick truthy/falsy check
myVariable = null;
console.log( !!myVariable ); // false
myVariable = 10
console.log( !!myVariable ); // true