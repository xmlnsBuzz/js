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

// ! ๐กฃ

// ( () => {
// this.greet = function greet () {
//   return "Hey! What's up?๐ฉธ๐กฃ";
//   } // ! ์ฌ๊ธฐ
//   console.log( this );
//   this.greet = greet; // ! ์ฌ๊ธฐ๋ ๋น ์ง
//   return this;
// }
// )();

// ! ๐กฃ

( () => {
  this.greet = () => "Hey! What's up1?";
  return this;
  console.log(this.greet())
} )();

console.log( greet() );
// ! function greet (){ return -> '('
// ! this.greet = greet; // ! ์ฌ๊ธฐ๋ ๋น ์ง
// ! } // ! ์์ ์ฌ๊ธฐ ๊ฐ ์์ด์ก๋ค.

// ? ๋ ๊ฐ๋จํ ํ๋ฉด

( () => {
  this.greet = () => "Hey! What's up2?";
  return this;
  console.log(this.greet())
} )();

console.log( greet() );

// NOTE //? ์์ arrow function์ map, reduce, forEach ๋ฑ์์ ํจ๊ณผ์ ์ผ๋ก ์ฌ์ฉํ  ์ ์๋ค.