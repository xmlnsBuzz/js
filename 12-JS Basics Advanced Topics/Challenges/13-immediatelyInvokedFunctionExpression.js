/**
 * Immediately Invoked Function Expression => IIFE
 */
// NOTE 별도의 호출 없이 function을 즉각 수행한다. IIFE

/* #region Option 1 여기부터*/
// Option1
/* 
( function addCustomGlobalMethod ( globalObject ) {
  globalObject.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
} )( this ); // IIFE (function)(parameter) 
*/

const myFn = function ( globalObject ) {
  globalObject.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
}

myFn( this );
// 위의 위의 Option1은 잘 사용되지 않는다.

/* #endregion Option1 여기까지는 */

/* #region Option2  */
/* 
( function () {
  this.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
} )();
 */
/* #endregion Option2 */

/* #region Option 3 Arrow function  */
/* 
( () => {
  this.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
} )();
 */
/* #endregion Option 3 Arrow function */

/* #region  여기부터 */
/* 
function addCustomGlobalMethod ( globalObject ) {
  globalObject.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
}

addCustomGlobalMethod( this );
*/
/* #endregion 여기까지를 합친 것과 같다. */


console.log( this === window );
console.log( typeof this );
console.log( typeof window );

this.customMethod();
window.customMethod();

customMethod();

// NOTE window.customGlobalMethod === this.customGlobalMethod
