// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var length = window.prompt();
  // check for correct length

  var lowerCase = confirm();
  var upperCase = confirm();
  var special = confirm();
  var numbers = confirm();
  
  var password = '';
  var passowrdLength = length;

  for (var ii = 0; i < passowrdLength; i++)
  {
    // loops through all chosen types
  }

  return password;
}