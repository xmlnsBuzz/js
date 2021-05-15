/**
 * Arrow Function and This
 * ! call()
 * ! bind()
 */

// const num = {
//   value: 100,
//   info: () => {
//     console.log( this ); // this -> window object
//     return this.value;
//   }
//   /**
//    * * arrow function은 아래의 regular function expression처럼 스스로 
//    * *'this'를 가지지 못한다. 
//    * * 왜냐하면 arrow function을 사용할 경우 항상 outer scope(이 경우
//    * * global scope)를 refer하기 때문이다.
//    * ! 따라서 스스로 this를 가지려면 RFE를 사용한다.
//    */

//   // info: function info() {
//   //   console.log(this) // this -> num object
//   //   return this.value;
//   // }
// };
// console.log( num.info() );

// const anotherNum = {
//   value: 5,
//   info: () => {
//     console.log( this ); // this -> still window object
//     return this.value;
//   }

//   // info: function info() {
//   //   console.log(this) // this -> newNum object
//   //   return this.value;
//   // }
// };

// const newNum = {
//   value: 17
// }

// console.log( anotherNum.info() );
// console.log( anotherNum.info.call( newNum ) );
// // RFE를 사용했을 경우의 result
// /* 
// {value: 17}
// 17
// */

// // Arrow function expression을 사용한 result
// /* 
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}GetParams: ƒ (func)alert: ƒ alert()atob: ƒ at... 

// undefined // ! undefined 왜냐하면 스스로 this를 가질 수 없어서 outer scope(이 경우 global scope)를 참조하므로
// */

const str = {
  value: "Delayed Greeting",
  // greet: () => {
  //   console.log( this );
  //   return this.value;
  // }

  // Option 1
  // greet: function greet () {
  //   const self = this;
  //   setTimeout( function () {
  //     console.log(self) 

  //     console.log( self.value );
  //     return this.value;
  //   }, 1000)
  // }

  // Option 2
  // greet: function greet () {
  //   setTimeout(
  //     function () {
  //     console.log( this );
  //     console.log( this.value );
  //     }.bind( this ),
  //     1000 );
  // }
  greet: function greet () {
    setTimeout(() =>{
        console.log( this );
        console.log( this.value );
      }, 1000);
  }
  // greet: function greet(){}... 는 function의 outer여서 RFE를 사용했으므로
  // 내부의 setTimeout은 arrow function을 사용해도 된다는 의미같다.
};

str.greet();