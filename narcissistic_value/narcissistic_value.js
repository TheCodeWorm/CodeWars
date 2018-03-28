// Noel Caceres
// 3/28/2018
// CodeWars - Narcissistic Numbers

/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.


// using for loops and parseInt
function narcissistic( value ) {
	var isNar = false;
  var tmpStr = value.toString();
  var newVal = 0;
  for (var i=0; i< tmpStr.length ; i++) {
  	newVal += Math.pow(parseInt(tmpStr[i]), tmpStr.length);
  }
  if (newVal == value) isNar = true;
  return isNar;
}
*/

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}