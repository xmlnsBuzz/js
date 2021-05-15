/**
 * Create Button increase click times
 */

const createButton = (title) => {
  const btn = document.createElement( "button" );
  let clicksQty = 0;
  btn.innerHTML = title;

  // RFE
  // btn.onclick = function () {
  //   console.log( "Button was Clicked!" );
  //   console.log( this );
  //   // ! RESULT : this <button>Button was clicked N times</button> object
  //   btn.innerHTML = "Button was clicked " + ++clicksQty + " times!";
  // };

  // AFE
  btn.addEventListener( "click", function () {
    console.log( "Button was Clicked!" );
    console.log(this); // window object
    btn.innerHTML = "Button was clicked " + ++clicksQty + " times!";
  } );


  document.body.appendChild( btn );
};

createButton("Click Me");
createButton( "Click Me Too" );

// NOTE // ! 위의 2개 button은 clicksQty가 별개로 증가한다. -> closure
// NOTE // ! "별개"라는 뜻은 메모리상의 주소(pointer)가 별개라는 것이다.









