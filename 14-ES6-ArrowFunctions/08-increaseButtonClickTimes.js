const createButton = (title) => { // ? (title)처럼 parameter가 하나일 때,  parenthesis는 option이다.
  const btn = document.createElement( "button" );
  let clicksQnty = 0;
  let clicksCon = 0;

  btn.innerHTML = title;
  // btn.onclick = // ! 여기서 function () {
  // !  console.log( "Button was clicked " + ++clicksCon + " times" );
  // !  btn.innerHTML = "Button is clicked " + ++clicksQnty + " times";
  // !  }; // ! 여기까지

  // * Regular function expression
  // btn.addEventListener( "click", function () {
  //   console.log( "Button was clicked " + ++clicksCon + " times" );
  //   btn.innerHTML = "Button is clicked " + ++clicksQnty + " times";
  // })

  // * Regular function expression with "this"
  // * RFE 에서는 "this"를 사용해도 된다.
  btn.addEventListener( "click", function () {
    console.log( this ); // <button></button>
    console.log( "Button was clicked " + ++clicksCon + " times" );
    this.innerHTML = "Button is clicked " + ++clicksQnty + " times";
  } );

  // * Arrow function expression
  // * Arrow function에서는 "this"를 사용하면 console은 증가하지만 innerHTML은 변화가 없다. 왜냐하면 this=window이므로 scope가 function이 아닌 global이 되기 때문이다.
  // btn.addEventListener( "click", () => {
  // console.log(this); // window object scope
  //   console.log( "Button was clicked " + ++clicksCon + " times" );
  //   this.innerHTML = "Button is clicked " + ++clicksQnty + " times";
  // })

  // * Arrow function expression
  // ! 따라서 arrow function을 사용할 때는 항상 "function scope" 속의 변수를 사용한다.
  // btn.addEventListener( "click", () => {
  //   console.log( "Button was clicked " + ++clicksCon + " times" );
  //   btn.innerHTML = "Button is clicked " + ++clicksQnty + " times";
  // } );

  document.body.appendChild( btn );
};
createButton("Click Me!");
createButton("Click Me Too!");

// NOTE // ! 위의 2개의 button은 각각 따로 증가한다. 이 것이 바로 closure인데, 각각의 호출된 function에 각각의 pointer가 할당되기 때문에 각각이 증가하는데 있어서 서로에게 영향을 주지 않기(못하기) 때문이다. 

// NOTE Closure가 이제 좀 이해가 되는 듯 하다.