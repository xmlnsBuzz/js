const multiplier = ( num, mult = 2 ) => {
  console.log( num, mult );
  return num * mult;
};

console.log( multiplier( 10, 3 ) ); // 10 * 3 = 30
console.log( multiplier( 5 ) ); // 5 * 2 = 10
console.log( multiplier() ); // undefined * 2 = NaN

console.log( "-----------------------" );

const groceryItem = (
  title,
  qty,
  item = {
    groceryItemTitle: title,
    groceryItemQty: qty,
    // groceryItemPrice: price
  },
  price

) => {
  console.log( title, qty, item );
};

groceryItem( "Banana", 5)