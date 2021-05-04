/**
 * let LifeCycle
 */
function fn () {
  let a; // Initialize with undefined.
  console.log( a ); // undefined
  a = 10; // a is assigned and has value
  console.log( a ); //
}

// console.log(a); // refs error: not defined

fn();