// Pre-ES6 - Template Strings
const myNumbers = 10;
const myStr = "Hello";
const myArr = [ 1, 2 ];
const myObj = { x: 11 };
const myBool = true;
const myGreeting = name => "Hello " + name

const myTemplateStr = "My number is " + myNumbers + ", my string is " + myStr + ", my array is [" + myArr + "], my object is " + myObj + ", my boolean is " + myBool + " and result of function call is \"" + myGreeting("Mike")+"\"";
console.log(myTemplateStr)

// ES6 - Template Literal


const templateLiteral = `My number is ${myNumbers}, my string is ${myStr}, my array is [${myArr}], my object is ${myObj}, my boolean is ${myBool} and result of function call is "${myGreeting( "Mike" )}" `;
 
const templateLiteralWithDirectFunctionCall = `My number is ${myNumbers}, my string is ${myStr}, my array is [${myArr}], my object is ${myObj}, my boolean is ${myBool} and result of function call is "${(name=> "Hello " + name)( "Mike" )}" `;

const templateLiteralWithDirectFunctionCallAndTernaryOperator = `My number is ${myNumbers}, my string is ${myStr}, my array is [${myArr}], my object is ${myObj}, my boolean is ${myBool} and result of function call is "${(name=> "Hello " + name)( "Mike" )}" and result of the ternary operator is ${myBool ? 15 : "World"} `;
console.log( templateLiteral )

console.log( templateLiteralWithDirectFunctionCall )

console.log(templateLiteralWithDirectFunctionCallAndTernaryOperator)
// NOTE ${} 속에는 variables, function, ternary operator등 원하는 것을 넣을 수 있다.

















