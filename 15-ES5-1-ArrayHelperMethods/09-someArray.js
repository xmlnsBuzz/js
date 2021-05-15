/**
 * ! some()
 * ? "false" if all callback functions returned false
 * * 즉 하나라도 true이면 return true
 */

const myNumbers = [ 3, -5, 1, 10, -7 ];

const isPositiveNumber = element => typeof element === "number" && element > 0;

const somePositivesCheck = myNumbers.some( isPositiveNumber );

console.log( somePositivesCheck );
console.log("____________")
const items = [
  {
    title: "Computer",
    quantity: 10
  },
  {
    title: "Phone",
    quantity: 3
  },
  {
    title: "Headphones",
    quantity: 15
  }
];

// ? when all items have quantity > 0 && some items have quantity <= 5 return true. 즉, 상품이 없지 않으면서 5개 이거나 5개 이하일 때
/* #region 여기서 */

if (
  items.every( item => item.quantity > 0 ) &&
  items.some( item => item.quantity <= 5 ) ) {
  console.log("All items may be sold soon.")
} else {
  console.log("All items may not be sold soon.")
}

console.log("_____________")

// ? some items have quantity 0
if ( items.some( item => item.quantity === 0 ) ) {
  console.log("Some items are sold out!")
} else {
  console.log("Some items remains")
}
  
/* #endregion 여기까지가 하나임. */

