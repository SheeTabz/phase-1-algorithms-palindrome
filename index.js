
  // Write your algorithm here
  /* Expects a function that takes in a string and 
    returns true if string is a isPalindrome */

/* 
  Add your pseudocode here

initialize a function isPalidrome and pass an argument string
convert string to an array
 reverse the array
 convert reversed array to string
  if string strinctly equals to a reversed string
     return true
  else return false 
*/

// CODE SOLUTION
function isPalindrome(word) {
  let newStringArray = word.split('');
  let reversedArray = newStringArray.reverse();
  let reversedString = reversedArray.join('');
  
  if(word === reversedString){
    return true;
  }
  else{
    return false;
  }
  
  }
  console.log(isPalindrome("abb"))


/*
  Add written explanation of your solution here

  We will create a function that takes in a string and then converts the string us ing split(' ')method to an array 
  then it will use the .reverse method to reverse the array and the join(" '") method to join
  the array back to a single string and now it will compare the string we passsed as aparameter
  and match it to the reversed string and return true if they match else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  declare(isPalindrome(string))
 it("return true for abba")
  expected(isPalindrome("abba")).to.be.true;
  expected(isPalindrome("robot")).to.be.false;
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

