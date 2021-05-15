/**
 * ! every()
 * ? element 중 하나라도 false 이면 return false 
 * * "false" if any of the callback functions returned false
 */

const myNumbers = [ 3, -5, 1, 10, -7 ];

const isPositiveNumber = element => typeof element === "number" && element > 0;

const everyPositivesCheck = myNumbers.every( isPositiveNumber );

console.log( everyPositivesCheck );

// ? when all items have quantity > 5 return true.
if ( items.every( item => item.quantity > 5 ) ) {
  console.log( "All items are available." );
} else {
  console.log( "All items aren't available." );
}













