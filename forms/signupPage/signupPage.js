btnSignup.onclick=function(){
  var firstName = inptFirstName.value
  var lastName = inptLastName.value
  var email = inptNewEmail.value
  var password = inptNewPassword.value
  var birthday = inptBirthday.value
    var query = "INSERT INTO user (firstName,lastName,email,password,birthday) VALUES ('" + firstName + "', '" + lastName + "', '" + email + ", '" + password + ", '" + birthday + ")"
// alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle542222&pass=Plye4544&database=375groupb1&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added signed up!")
             ChangeForm(homepage)
        } else
            NSB.MsgBox("There was a problem signing up.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
}
}
