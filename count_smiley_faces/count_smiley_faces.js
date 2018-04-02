// Noel Caceres
// 3/27/2018
// Codewars - Count the Smiley Faces

/*
Given an array (arr) as an argument complete the function countSmileys that should 
return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose 
are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) 
or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid 
input (input will always be an array). Order of the face (eyes, nose, mouth) 
elements will always be the same

// Function: countSmileys
function countSmileys(arr) {
	var result = 0;
	for (var i=0; i<arr.length; i++) {
  	var face = arr[i];
    var faceLen = face.length;
    // check if face has valid eyes
    if (face[0] == ':' || face[0] == ';') {
      // check for valid mouth at last char
    	if (face[faceLen-1] === ')' || face[faceLen-1] === 'D') {
      	// has a nose and only 3 chars
      	if (faceLen === 3) {
        	// if nose is valid, add to result
        	if (face[1] === '-' || face[1] === '~') { 
          	result++; 
          }
        }
        // if no nose and only 2 chars, add to result
        else if (faceLen == 2) result++;
      }
    }
  }
  return result;
}
*/

// Function: countSmileys
// using arrow functions, filter, test
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
