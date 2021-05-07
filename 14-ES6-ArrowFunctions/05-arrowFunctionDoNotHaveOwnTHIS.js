/**
 * ? Arrow function don't have own 'this' property
 * * "this" in arrow functions is always statically defined by the surrounding lexical scope
 */

// ! Traditional function expression
/* 
const num = {
  value: 100,
  info: function info () {
    console.log( this ); // ! num object
    return this.value;
  }
};


console.log( num.info() ); // ! 100
 */


// ? 🡻 위의 Traditional function -> arrow function으로 하면

/* 
const num = {
  value: 100,
  info: () => {
    console.log( this ); // ! window object
    return this.value;
  }
};
 
console.log( num.info() )
 */


// ? Function call with another context
const anotherNum = {
  value: 5,
  // ! 위
  info: () => {
    console.log( this ); // ! Still window object
    return this.value;
  }
  // ! 아래 
  // info: function info () {
  //   console.log( this ); // ! newNum object if called with info.call(newNum)
  //   return this.value;
  // }
};

const newNum = {
  value: 17
};

console.log( anotherNum.info() );
console.log( "-----------" );
console.log( anotherNum.info.call( newNum ) );

/**
 * ! 위와 같이 arrow function을 사용할 경우 this에 value값을 전달하지 못한다. 
 * * 그 이유는 "Arrow function이 자신의 this를 가지지 못하기 때문"이다.
 * ! 따라서 변수값을 pass(전달)해야 할 경우 아래과 같이 'function'을 사용한다. 
 */














