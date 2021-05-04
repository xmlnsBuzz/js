# Variable Lifecycle Phases

## Declaration
> Register variable in the corresponding scope

## Initialization
> Allocate memory for the variable. Variable decleared with "var" will get automatic value "undefined".

## Assignment 
> Assign value to the initialized varlable.

<!-- NOTE -->

```js
// without assignment
console.log( a ); // undefined
var a;

// with assignment
b = 20;
console.log( b ); // 20

// with function
function fn () {
  console.log( c ); // undefined
  var c;
  d = 10;
  console.log( d );
  var d;
}

// console.log(c); // c is not defined
// console.log(d); // d is not defined

fn(); // 10
```