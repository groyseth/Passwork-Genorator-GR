var generateBtn = document.querySelector("#generate");




function generatePassword() {
  var userPic = [];
  var passwordLength;
  var collect = []
  
  // possible variables 
  var numeric = ["1","2","3","4","5","6","7","8","9","0"]
  var capText = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var symbol = ["!","@","#","$","%","^","&","*","(",")","_","-","="]
  



  var numOfChar = prompt("Please enter the length of password, must be inbetween 8 and 128!");
  if (!(numOfChar >= 8 && numOfChar <= 128)){
    alert("Please enter within the paramiters")
    return;
  }else{
    passwordLength = numOfChar;
  }
    
      
  
  var upCase = confirm("Would you like Uppercase?");
  if (upCase){
    userPic = userPic.concat(capText);
  }
  
  var lowCase = confirm("Would you like lowercase?");
  if (lowCase){
    userPic = userPic.concat(lowerChar)
  }
  
  var numbersVar = confirm("Would you like numeric?");
  if (numbersVar){
    userPic = userPic.concat(numeric)
  }
  
  
  var specialChar = confirm("Would you like characters?")
  if (specialChar){
    userPic = userPic.concat(symbol)
  }
  
  
  // loop the user array and empty and password lenght 
  for (var i = 0; i < passwordLength; i++) {
    var charAmount = userPic[(Math.floor((Math.random() * userPic.length)))]
    collect.push(charAmount);
  }
   
 
 var passwordText = collect.join("");
  collect=[]

 console.log(passwordLength);
 console.log(userPic);

 
  return passwordText;
}  

function writePassword() {
  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  //  var randNum = Math.floor(Math.random() *numBs.length);
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