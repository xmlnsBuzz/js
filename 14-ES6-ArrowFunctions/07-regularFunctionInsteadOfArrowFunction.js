/**
 * ! Object Literal
 */
// const num = {
//   value: 100,
//   // info: () => {
//   //   console.log( this );
//   //   return this.value;
//   // }
//   info: function () {
//     console.log( this );
//     return this.value;
//   }
// };

// num.info( );

/**
 * Function Constructor
 * ! function constructor의 naming rule은 PascalCasing이다.
 */
function GroceryItem ( title, kind ) {
  this.title = title;
  this.kind = kind;
}
// ? GroceryItem -> Function constructor

// * Uncaught TypeError : GroceryItem is not a constructor
// const GroceryItem = ( title, kind ) => {
//   this.title = title;
//   this.kind = kind;
// };
// NOTE //! 위의 4줄 arrow function은 function constructor로 사용할 수 없다는 것을 의미한다.
// NOTE //! 항상 Regular function expression을 사용하여 function constructor를 만들 것.

GroceryItem.prototype.info = function () {
  return this.title + " is " + this.kind + ".";
};


// GroceryItem.prototype.info = () => {
//   return this.title + " is " + this.kind + ".";
// };

// NOTE "this" is Window, and function always returns "undefined is undefined"
// NOTE // ! 실행 후 브라우저 콘솔에 "apple.info()"를 치면 undefined is undefined -> function constructor는 regular function constructor를 반드시 사용해야 한다.
// NOTE // * Arrow function 은 스스로 this property를 가질 수 없다는 사실


const apple = new GroceryItem( 'apple', 'fruit' );
console.log( apple );
console.log( apple.info() );
console.log("-------------")
const brocolli = new GroceryItem( 'brocolli', 'vegetable' );
console.log( brocolli );
console.log( brocolli.info() );














