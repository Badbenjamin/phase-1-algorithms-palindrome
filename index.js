

function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  } else {
    for (let f = 0 ; f < Math.floor(word.length /2); f++) {
      if ((word.charAt(f)) == (word.charAt((word.length -1) - f))){
        return true
      } else {
        return false
      }
   } 
  }
}
// isPalindrome("racecar")
/* 
  Add your pseudocode here
  1 split string into two halves by dividing string length by 2 XXX
  2 compare character at first position with character at last postition

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
