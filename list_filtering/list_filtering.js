// Noel Caceres
// 3/27/2018
// Codewars - List Filtering

/* create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example:

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// using for loop with typeof
function filter_list(l) {
	result = [];
  for (var i=0; i < l.length; i++) {
    // check if type Number
  	if (typeof l[i] === 'number') 
    	result.push(l[i]);
  }
  return result;
}
*/

// Function: filter_list
// using filter and typeof
function filter_list(l) {
  return l.filter(function(n) {return typeof n == 'number'})
}