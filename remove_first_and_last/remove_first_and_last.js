// Noel Caceres
// 3/30/2018
// Codewars - Remove first and last in string

/*
create a function that removes the first and 
last characters of a string. You're given one 
arameter, the original string. You don't have 
to worry with strings with less than two 
characters.

// Using for loop
removeFirst_Last = (str) => {
  var result = "";
  for (var i=0; i<str.length; i++) {
    // if NOT first or last index
    if( i !==0 && i !==str.length-1)
      result += str[i];
  }
  return result;
};
*/


// FUNCTION: removeChar
// using slice() instead of for loop
removeFirst_Last = (str) => {
  return str.slice(1, -1);
}