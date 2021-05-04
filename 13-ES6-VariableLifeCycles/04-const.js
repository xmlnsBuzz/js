/**
 * What is "const"
 * const -> constant : value that doesn't change XXX
 * const -> variable : that can't be reassigned. OOO
 */
// const myConst;
// myConst = 20; // Uncaught SyntaxError: Missing initializer in const declaration

// const myConst = 10;
// myConst = 20; // Uncaught TypeError: Assignment to constant variable.

const myConst = [];
myConst.push( "newElement" );
myConst.push( "anotherElement" );
console.log(myConst)

const copyOfMyConst = myConst;
// console.log(copyOfMyConst)

const anotherConst = {};
anotherConst.a = 10;
anotherConst.b = "abc";
console.log(anotherConst)
// console.log(anotherConst.length) // undefined

// NOTE Array는 push method로, object는 . (dot notation)으로 추가 또는 삭제.

const primitiveTypeConst = null; // primitive type
primitiveTypeConst = undefined; // Uncaught TypeError: Assignment to constant variable.


