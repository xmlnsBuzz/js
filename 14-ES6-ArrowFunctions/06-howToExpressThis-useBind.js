/**
 * window object 내에서 this를 표현하는 방법
 */

const str = {
  value: "Delayed greeting",
  // ! "this" is lost in the callback function
  // ? option 1
  // greet: function greet () {
  //   const self = this;
  //   setTimeout( function () {
  //     console.log( self ); // ! Window object
  //     console.log( self.value ); // * this.value = window.value 이므로 "undefined"가 됨.
  //   }, 1000 );
  // }
  // // ? option 2
  // greet: function greet () {
  //   setTimeout(
  //     function () {
  //       console.log( this ); // ! str object
  //       console.log( this.value ); // * "Delayed greeting"
  //     }.bind( this ),
  //     1000
  //   );
  // }
  // ? option 3
  greet: function greet () {
    setTimeout( () => {
      console.log( this ); // ! str object
      console.log( this.value ); // * "Delayed greeting"
    }, 1000 );
  }
  
};

str.greet();

// ? Arrow function is a new function? -> 
// ! NO
// ? Arrow functions must be used everywhere instead of regular functions? -> 
// ! NO