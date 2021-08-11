/**
 * Example 8 - Default value
 */

const myObject = {
  a: 10,
  b: true
};

// const { a, b, c = "Default value" } = myObject;
// console.log( a, b, c ); // 10 true Default value

const { a, b = "Default value", c = "default value" } = myObject;
console.log(a,b,c); // NOTE 10 true Default value , b = "Default value"로 redefine했지만 변화없다