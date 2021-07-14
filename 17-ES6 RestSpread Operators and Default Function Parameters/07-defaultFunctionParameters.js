// NOTE 이해가 잘 안 된다.
// ? 이해가 잘 안 된다.

const warning = (title) => {
  console.log(
    title !== undefined
      ? `Title of the button is ${ title }. But color is not set`
      : `Title and color are not set`
  )
  throw new Error( "btn function must be called with two arguments - title and color" );
};


const btn = ( title = warning(), color = warning(title) ) => {
  console.log( title );
  // Create new "Button" with title and background color. And Insert button into the DOM
};

btn( "button 1", "grey" );

btn( "button 2" );


