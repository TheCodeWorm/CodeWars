// Noel Caceres
// 3/27/2018
// Codewars - Credit Card Mask

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

// FUNCTION: Maskify
function maskify(cc) {
  str = "";
  ccLen = cc.length; 
  for(var i=0; i< ccLen; i++)  {
    // check if need to concat to string
    if (i > ccLen-(4+1))
      str += cc[i];
    else str += '#';
  }
  return str;
}
*/

// FUNCTION: Maskify
maskify = (cc) => {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
