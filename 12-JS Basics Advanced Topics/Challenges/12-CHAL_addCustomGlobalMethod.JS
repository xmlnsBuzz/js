/**
 * Challenge
 * 
 * Create a function that will add custom tmehod to the global object "window"
 */

// NOTE 20210530 현재 이해가 안되고 있음 몇 번이고 다시 볼 것.
function addCustomGlobalMethod ( globalObject ) {
  globalObject.customMethod = function () {
    console.log( "Greeting from the custom method." );
  };
}

addCustomGlobalMethod( this );
console.log( this === window );
console.log( typeof this );
console.log( typeof window );

this.customMethod();
window.customMethod();

customMethod();

// NOTE window.customGlobalMethod === this.customGlobalMethod
