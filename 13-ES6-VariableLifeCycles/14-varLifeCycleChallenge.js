let b = 5;
a = b;

{
  let c = a;
}

var a = 1;

var c;

console.log( a, b, c ); // 1, 5, undefined

/**
 * ! CHANNELGE/1-3/variable-lifecycles/finish branch 참조할 것.
 */