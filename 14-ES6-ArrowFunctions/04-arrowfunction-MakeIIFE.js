/**
 * IIFE Arrow function
 */
// ( () => {
//   function greet () {
//     return "Hey! What's up?";
//   }
//   console.log( this );
//   this.greet = greet;
//   return this;
// }
// )();

// ! 🡣

// ( () => {
// this.greet = function greet () {
//   return "Hey! What's up?🩸🡣";
//   } // ! 여기
//   console.log( this );
//   this.greet = greet; // ! 여기도 빠짐
//   return this;
// }
// )();

// ! 🡣

( () => {
  this.greet = () => "Hey! What's up1?";
  return this;
  console.log(this.greet())
} )();

console.log( greet() );
// ! function greet (){ return -> '('
// ! this.greet = greet; // ! 여기도 빠짐
// ! } // ! 위의 여기 가 없어졌다.

// ? 더 간단히 하면

( () => {
  this.greet = () => "Hey! What's up2?";
  return this;
  console.log(this.greet())
} )();

console.log( greet() );

// NOTE //? 위의 arrow function은 map, reduce, forEach 등에서 효과적으로 사용할 수 있다.