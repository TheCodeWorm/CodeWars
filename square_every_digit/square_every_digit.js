// Noel Caceres
// 3/27/2018
// Codewars - Square Every Digit

/*
Square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// Function: squareDigits
function squareDigits(n){
  var result = "";
  var tmpStr = n.toString();
  for (var i=0; i<tmpStr.length; i++) {
    // number strings to ints, then square
    result +=  Math.pow(parseInt(tmpStr[i]), 2);
  }
  return parseInt(result);
}
