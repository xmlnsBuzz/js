/**
 * Rewrite "if... else" statement with ternary operator
 */
/* function emptyArray ( inputArray ) {
  if ( inputArray.length > 0 ) {
    return "Array is not empty";
  } else {
    return "Arrya is empty";
  }
}

console.log(emptyArray( [ ] ));
 */

// ANSWER return to Ternary Operator
function emptyArray ( inputArray ) {
  return inputArray > 0
  ? "Array is not empty"
  : "Array is empty"
}

console.log(emptyArray( [1 ] ));




















