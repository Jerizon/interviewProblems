// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charCount = {};
  var maxCount = 0,
      maxLet = '';
  for(let char of str){
    charCount[char] = charCount[char] + 1 || 1;
  }

  for(let item in charCount){
    if(charCount[item] > maxCount){
      maxCount = charCount[item];
      maxLet = item;
    }
  }

  return maxLet;  
}