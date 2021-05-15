const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  }
];
/* 
Create a function "sortProductsByPrice" with one parameter "products".

This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.
*/

const sortProductsByPrice = products =>
  products.sort( ( a, b ) => {
    console.log( a.title, b.title );
    return a.price - b.price;
  } );

sortProductsByPrice( products );

/* Which sorting algorithm is used here in Google Chrome, FireFox, Safari, Node.js?
 
Is this sorting stable or not
*/
console.log( products );


/* #region   */

// const sortProductsByPrice = products =>
//   products.sort(
//     ( counts, product ) => {
//       console.log( "Counts is " + JSON.stringify( counts ) + " and product is " + JSON.stringify( product ) );
//       counts[ product.price ] =
//         ( counts[ product.price ] || 0 ) + product.quantity
//       return counts;
//     }, {} );

//     console.log(sortProductsByPrice(products))

/* #endregion */