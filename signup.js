var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var Phone_number = document.forms['vform']['Phone_number'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var Phone_noerror = document.getElementById('Phone_noerror');
// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
Phone_number.addEventListener('blur',phonenoVerify,true);
// validation function
function Validate() {
  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}
function validatePassword(password) {
                
  // Do not show anything when the length of password is zero.
  if (password.length === 0) {
      document.getElementById("msg").innerHTML = "";
      return;
  }
  // Create an array and push all possible values that you want in password
  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]"); // Special Charector
  matchedCase.push("[A-Z]");      // Uppercase Alpabates
  matchedCase.push("[0-9]");      // Numbers
  matchedCase.push("[a-z]");     // Lowercase Alphabates

  // Check the conditions
  var ctr = 0;
  for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
          ctr++;
      }
  }
  // Display it
  var color = "";
  var strength = "";
  switch (ctr) {
      case 0:
      case 1:
      case 2:
          strength = "Very Weak";
          color = "red";
          break;
      case 3:
          strength = "Medium";
          color = "orange";
          break;
      case 4:
          strength = "Strong";
          color = "green";
          break;
  }
  document.getElementById("msg").innerHTML = strength;
  document.getElementById("msg").style.color = color;
}
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}
   function phonenoVerify(){
     if(Phone_number.value !=""){
      Phone_number.style.border = "1px solid #5e6e66";
      document.getElementById('Phone_confirm_div').style.color = "#5e6e66";
      document.getElementById('password_div').style.color = "#5e6e66";
      password_error.innerHTML = "";
      return true;
    }
    
    if(Phone_number == ""){
      Phone_number.style.border = "1px solid red";
      document.getElementById('Phone_confirm_div').style.color = "red";
      document.getElementById('Phone_number').innerHTML =" ** Please fill the Phone number field";
      Phone_number.focus();
      return false;
    }
    if(isNaN(Phone_number)){
      Phone_number.style.border = "1px solid red";
      document.getElementById('Phone_confirm_div').style.color = "red";
      document.getElementById('Phone_number').innerHTML =" ** user must write digits only not characters";
      Phone_number.focus();
      return false;
    }
    if(Phone_number.length!=10){
      Phone_number.style.border = "1px solid red";
      document.getElementById('Phone_confirm_div').style.color = "red";
      document.getElementById('Phone_number').innerHTML =" ** Phone_number Number must be 10 digits only";
      return false;
    }
        var p = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(Phone_number.value.matchedCase(Phone_number))
        {
      Phone_number.style.border = "1px solid red";
      document.getElementById('Phone_confirm_div').style.color = "red";
      document.getElementById('Phone_number').innerHTML =" ** Phone_number must be xxx-xxx-xxxx";
      return false;
    }
     
  }
