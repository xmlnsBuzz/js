/* 
MOdify parameters section in the "processQuantities" function to match console.log outputs
*/

const processQuantities = ( [
  minQty,
  maxQty,
  defaultQty = 0
] ) => {
  console.log( minQty );
  console.log( maxQty );
  console.log( defaultQty );
  return maxQty - minQty;
};

const qtyRange = [ 8, 29 ];

processQuantities( qtyRange );








