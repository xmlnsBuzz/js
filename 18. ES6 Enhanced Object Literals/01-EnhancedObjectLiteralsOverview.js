// let name = "Mike";
// let age = 18;

// const person = {
//   name,
//   age,
//   info () {
//     console.log( `${ name } is ${ age } years old.` );
//   },
//   [ age ]: true
// };

// console.log(info())

// Object literal
// let myObject = {
//   prop1: 10,
//   prop2: "string",
//   prop3: function () {
//     console.log( this.prop1, this.prop2 );
//   }
// };
// console.log( myObject );

/** 
 * Example 1 = shorthand property names // NOTE
 */
// const num = 10;
// const str = "Hello world";
// const bool = true;

// const myObject = {
//   num,
//   str,
//   bool,
//   // missing
// }

/** 
 * Example2 - shorthand method names // NOTE
 */
/* const myCar = ( make, year ) => {
  return {
    make,
    year,
    // info: function ( price ) {
    //   return `${ make } costs ${ price }$`;
    // NOTE 아래처럼 function(method)을 shorthand로 할 수 있다

    // NOTE 1. 
    // info: ( price ) => {
    //   return `${ make } costs ${ price }$`;
    // }
    // NOTE 2.
    info ( price ) {
      return `${ make } costs ${ price }$`;
    }
  };
};

// NOTE ************ 아래 중요 // NOTE

const newCar = myCar( "Tesla", 2020 );
console.log( newCar.info( 50000 ) );
 */

/**
 * Example - 3 computed property names --> [ BG_COLOR_PROP ]
 * // NOTE '[' 과 ']' 속에 들어간다는 것을 명심
 */

// const BG_COLOR_PROP = "bgColor";
const BG_COLOR_PROP = "backgroundColor";
const btn = {
  title: "Button 1",
  [ BG_COLOR_PROP ]: "blue"
};

const list = {
  options: [ "Option 1", "Option 2" ],
  [ BG_COLOR_PROP ]: "grey"
};

console.log( btn );
console.log( list );
console.log( btn[ BG_COLOR_PROP ] );
console.log( list[ BG_COLOR_PROP ] );










