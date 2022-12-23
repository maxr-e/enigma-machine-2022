// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(document.querySelector("#generate"));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = lowercaseLetters.toUpperCase(); // converts lowercase letters to uppercase

var lowerCaseLettersArray = lowercaseLetters.split(''); // converts letters in a string to an array with those letters (e.g. ['a', 'b', 'c', ...])

function getRandCharFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log('randChar', getRandCharFromArray(lowerCaseLettersArray)); // console.logs a random lowercase letter



var generatePassword = (
  length = 8,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

console.log(generatePassword())
