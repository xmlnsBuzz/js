/**
 * CHALLENGE 3
 * 
 * Create object "objectWithNestedObject" with initial value {}(empty object)
 * Add property "nestedObject" with initial value also {}
 * Add property "a" with value "null" to "nestedObject". Use dot notation.
 * Create new variable with property name
 * Add property "b" with value "true" to "nestedObject". Use bracket notation.
 */

let objectWithNestedObject = {};

objectWithNestedObject.nestedObject = {};
objectWithNestedObject.nestedObject.a = null;

const newPropertyName = "b";
objectWithNestedObject.nestedObject[newPropertyName] = true;

console.log(objectWithNestedObject)

