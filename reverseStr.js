// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  return str.split('').reduce((reversed, character)=>{
    return character + reversed;
  }, '');
  
}

//SOLUTION #2
  //return str.split('').reverse().join('');

//SOLUTION #3
  // var reverseString = '';
    // for (let character of str) {
    //   reverseString = character + reversed;
    // }
    // return reverseString;