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

fn(); // 10