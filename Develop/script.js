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
  var length = window.prompt('Enter password length.');
  if (length > 7 || length < 129)
  {
    var lowerCase = confirm("Would you like lowercase letters?");
    var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upperCase = confirm("Would you like uppercase letters?");
    var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];

    var special = confirm("Would you like special characters");
    var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    
    var numbers = confirm("Would you like numbers");
    var numberChars = ["1","2","3","4","5","6","7","8","9","0"];

    var characters;
    var characterSelections = [];

    if (lowerCase === true || upperCase === true || special === true || numbers === true) { //uses a lot of ors to generate the character selection
        
      if (lowerCase === true) 
      {
        characterSelections += lowerCaseChars;
        console.log('characterSelections = ', characterSelections);
      }

      if (upperCase === true) 
      {
        characterSelections += upperCaseChars;
        console.log('characterSelections = ', characterSelections);
      }

      if (special === true) 
      {
        characterSelections += specialChars;
        console.log('characterSelections = ', characterSelections);
      }

      if (numbers === true) 
      {
        characterSelections += numberChars;
        console.log('characterSelections = ', characterSelections);
      }
    
      var password = '';
      characters = characterSelections;
      var passowrdLength = length;

      for (var i = 0; i < passowrdLength; i++)
      {
        // loops through all chosen types
        var index = Math.floor(Math.random() * characterSelections.length);
        console.log("random character ", characterSelections[index]);
        console.log("random index = ", index);
        password += characterSelections[index];
        console.log("password = ", password);
      }

      return password;
    } // connected to if with a bunch of ors
    else
    {
      alert("Must choose a selection");
    }

  }
  else
  {
    alert('Enter a number between 8 and 128');
  }
}