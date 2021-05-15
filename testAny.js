// const num = {
//   value: 100,
//   info: function () {
//     console.log(this)
//     return this.value;
//   }
// };

// const num1 = {
//   value: 5
// }

// num.info();
// console.log("-------------")
// num.info.call( num1 ); // {value: 5} -> object 출력
// console.log("-------------")
// console.log(num.info.call(num1)) // {value: 5} 5 object와 value 출력
// console.log("-------------")

// ! function constructor
function GroceryItem ( title, kind ) {
  this.title = title;
  this.kind = kind;
}

/* NOTE // * new constructor는 arrow function을 사용할 수 없다.
// 반드시 regular function expression을 사용해야 한다.
const GroceryItem = ( title, kind ) => {
  this.title = title;
  this.kind = kind;
}; 
// 아래와 같이 
// ! Uncaught TypeError: GroceryItem is not a constructor 에러가 난다
*/
// GroceryItem.prototype.info = function () {
//   return this.title + " is " + this.kind;
//   }

GroceryItem.prototype.info = () => {
  return this.title + " is " + this.kind;
};
// undefined가 된다.

// "new" constructor
const apple = new GroceryItem( "apple", "fruit" );
console.log( apple );
/* //! 출력결과
GroceryItem
kind: "fruit"
title: "apple"
*/

console.log( apple.info() );

const brocolli = new GroceryItem( "brocolli", "vegetable" );
console.log( brocolli );
console.log( brocolli.info() );
