var generateBtn = document.querySelector("#generate");

//user enters a number for the prompt after clicking the button
function passwordCriteria() {
  var length = parseInt(window.prompt("How many characters would you like your password to contain?"));

// if user cancels, the function ends
  if (!length) {
      return;
  }

//if user enters a number less than 8; an alert message will pop up
  if (isNaN(length) || length < 8) {
      window.alert("Password length must be at least 8 characters.");
      return;
  }

//if user enters a number more than 128; an alert message will pop up
  if (isNaN(length) || length > 128) {
      window.alert("Password length must be less than 129 characters.");
      return;
  }

//prompts will ask user which types of characters they want to include in the password
  var addLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  var addUppercase = window.confirm("Click OK to confirm including uppercase characters.");
  var addNumeric = window.confirm("Click OK to confirm including numeric characters.");
  var addSpecial = window.confirm("Click OK to confirm including special characters.");

//if user selects none of the options then an alert message will pop up
  if (!addLowercase && !addUppercase && !addNumeric && !addSpecial) {
      window.alert("To generate a password at least one character type must be selected.");
      return;
  }

  return {
      length, addSpecial, addNumeric, addLowercase, addUppercase,
  };
        }

  function generatePassword(criteria) {
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChar = "1234567890";
    var specialChar = "!#$%&()*+-./:;<=>?@[\]^_{|}~";

    let availableChar = "";
    if (criteria.addLowercase) availableChar += lowercaseChar;
    if (criteria.addUppercase) availableChar += uppercaseChar;
    if (criteria.addNumeric) availableChar += numericChar;
    if (criteria.addSpecial) availableChar += specialChar;

    let password = "";
    for (let i = 0; i < criteria.length; i++) {
         var randomIndex = Math.floor(Math.random() * availableChar.length);
         password += availableChar.charAt(randomIndex);
    }

    return password;
    }

  function writePassword() {
    var criteria = passwordCriteria();
    if (criteria) {
      var password = generatePassword(criteria);
      var passwordText = document.querySelector("#password");
          
      passwordText.value = password;
      }
  }

generateBtn.addEventListener("click", writePassword);
