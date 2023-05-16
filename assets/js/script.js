// Assignment code here
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetters = lowerCaseLetters.toUpperCase(); // converts lowercase letters to uppercase
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+=<>';
var userNumbersOption;
var userSymbolsOption;
var userToUpperCase;
var length;
var lowerCaseLettersArray = lowerCaseLetters.split(''); // converts letters from string to array

// Get references to the #generate element
function generatePassword() {
  returnValue = "";
  for(index = 0, n = lowerCaseLetters.length; index < length; index++){
    returnValue += lowerCaseLetters.charAt(Math.floor(Math.random() * n));
  }
  return returnValue;
}

var generateBtn = document.querySelector("#generate");
console.log(document.querySelector("#generate"));

// Write password to the #password input
function writePassword() {

// prompt passwrod length
lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
length = prompt('Length must be 8-128 characters:');

//validates length 8-128
  while(length < 8 || length > 128) {
    length = prompt('Invalid entry. Please enter a password with length 8-128 characters:');
  }

// prompt numbers option
userNumbersOption = prompt('Include numbers in password? Yes or No:');
userNumbersOption = userNumbersOption.toUpperCase(userNumbersOption);
  if(userNumbersOption !== 'Yes' && userNumbersOption !== 'Y' && userNumbersOption !== 'No' && userNumbersOption !== 'N') {
    alert('Invalid entry.');
  }

  // if yes, concatinate var userNumbersOption to var lowerCaseLetters
  if(userNumbersOption === 'Yes' || userNumbersOption === 'Y' || userNumbersOption === 'yes' || userNumbersOption === 'y') {
    lowerCaseLetters = lowerCaseLetters.concat(numbers);
  }

  console.log(lowerCaseLetters, "letters/numbers");

// prompts symbols option
userSymbolsOption = prompt('Include symbols? Yes or No:')
userSymbolsOption = userSymbolsOption.toUpperCase(userSymbolsOption);
  while(userSymbolsOption !== 'Yes' && userSymbolsOption !== 'Y' && userSymbolsOption !== 'No' && userSymbolsOption !== 'N') {
    alert('Please enter a valid response.');
    userSymbolsOption = prompt('Would you like your password to have special symbols? (yes or no')
    userSymbolsOption = userSymbolsOption.toUpperCase(userSymbolsOption);
  }

// if yes, concatinate var userSymbolsOption to var lowerCaseLetters
if(userSymbolsOption === 'Yes' || userSymbolsOption === 'Y' || userSymbolsOption === 'yes' || userSymbolsOption === 'y') {
  lowerCaseLetters = lowerCaseLetters.concat(symbols);
}

console.log(lowerCaseLetters, "letters/numbers/symbols");

//prompts uppercase option
userToUpperCase = prompt('Include uppercase letters? Yes or No:')
userToUpperCase = userSymbolsOption.toUpperCase(userToUpperCase);
    while(userToUpperCase !== 'Yes' && userToUpperCase !== 'Y' && userToUpperCase !== 'No' && userToUpperCase !== 'N') {
      alert('Invalid entry.');
      userToUpperCase = prompt('Include uppercase letters? Yes or No:')
      userToUpperCase = userSymbolsOption.toUpperCase(userToUpperCase);
    }
// if yes, concatinate var upperCaseLetters to var lowerCaseLetters
    if(userToUpperCase === 'Yes' || userToUpperCase === 'Y' || userToUpperCase === 'yes' || userToUpperCase === 'y') {
      lowerCaseLetters = lowerCaseLetters.concat(upperCaseLetters);
    }

  console.log(lowerCaseLetters, "letters/numbers/symbols/uppercase");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);