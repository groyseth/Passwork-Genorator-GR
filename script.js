var generateBtn = document.querySelector("#generate");

// var numeric = ["1","2","3","4","5","6","6","7","8","9","0"]
// var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","="]



// Write password to the #password input


function generatePassword() {
  var userPic = []
  var passwordLength;
  // var collect = []
  
  
  var numeric = ["1","2","3","4","5","6","7","8","9","0"]
  var capText = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","="]
  



  var numOfChar = prompt("enter the length of password");
  if (!(numOfChar >= 8 && numOfChar <= 128)){
    alert("no try again")
    return;
  }else{
    passwordLength = numOfChar;
  }
    
      
  
  var upCase = confirm("would you like Uppercase?");
  if (upCase){
    userPic = userPic.concat(capText);
  }
  
  var lowCase = confirm("would you like lowercase?");
  if (lowCase){
    userPic = userPic.concat(lowerChar)
  }
  
  var numbersVar = confirm("would you like numeric?");
  if (numbersVar){
    userPic = userPic.concat(numeric)
  }
  
  
  var specialChar = confirm("would you like characters?")
  if (specialChar){
    userPic = userPic.concat(symbol)
  }
  
  
  // userPic.push(collect);
  for (let i = 0; i < passwordLength; i++) {
    userPic += passwordLength [i] ;
  }
  // pulling a random character from userPics for each value of passwordLength
  //  Math.floor((Math.random() * 10) + 1);
  console.log(passwordLength)
  userPic.push("password");
  console.log(password)

 
  return password}  

   
  

  //  var randNum = Math.floor(Math.random() *numBs.length);
  // console.log(numOfChar);
  // add "prompt function" for userInput for num of char in password
  // 8>=num<128
  // var userInput = prompt("lowercase?");
  // if (userInput )
  
  //userInput confirmation for numeric, lowercase, uppercase, special (separately)
  //save those confirmations in separate variables
  // store all the values in form of arrays
  // var numeric = [0,1,2,3...]
  //based on user confirmation pick the correct arrays and concatenate them and store that concat array in new    variable
  //loop num times
  //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password


function writePassword() {
  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);