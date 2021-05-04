/* COMPILATION PHASE
Scopes:
Global {
  Line 6:
  const b; decleared, TDZ

  Line8:
  const sum; decleared, TDZ

  Line 20: 
  var a; decleared and initialized with "undefined"

  Line 22:
  function mult; decleared, initialized and assigned
}

sum {
 // nothing happens
}

if {
  Line 13:
  let multResult; decleared, TDZ
} else {
  Line 16:
  let sumResult; decleared, TDZ
}

mult {
  Line 22:
  var a; decleared, initialized with "undefined"

  Line 22:
  var b; decleared, initialized with "undefined"
}
*/
