//loginPage.style.backgroundColor=#8F6784;

//Net Id Login 
btnLogIn.onclick=function(){
req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptEmail.value + "&j_password=" + inptPassword.value);

if (req1.status == 200) { //everything worked.  
  // 1 good 0 bad
  if (req1.responseText == 1) {
    ChangeForm(homePage)
  } else if (req1.responseText == 0) {
    NSB.MsgBox("There was a problem logging in.")
  }
} else if (req1.responseText == 0) {
  // had a problem with the AJAX request.
  NSB.MsgBox(" Error: " + req1.status);
}
}


//Swap to sign up page
btnSignUp.onclick=function(){
  ChangeForm(signupPage)
}

/*
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle54222&pass=Plye4544&database=375groupb1&query=" + inptEmail.value + "email;

if (req1.status == 200) { //everything worked.  
  lblResponse.value = "Your LDAP return code was " + req1.responseText
  // 1 good 0 bad
  if (req1.responseText == 1) {
    ChangeForm(homePage)
  } else if (req1.responseText == 0) {
    alert("Your login info is invalid.")
  }
  */