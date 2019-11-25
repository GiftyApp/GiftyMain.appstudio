// Wishlist array
wishlists = ["Birthday", "Christmas", "Anniversary"]

//Create new wish list
btnCreate.onclick=function(){
  var wishlistName = inptWishlistName.value
  var occasion = inptOccasion.value

    var query1 = "INSERT INTO wishlist (wishlistName,Occasion) VALUES ('" + wishlistName + "', '" + occasion + "')";
    //push.wishlists(wishlistName);
    
// alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle542222&pass=Plye4544&database=375groupb1&query=" + query1);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully created a wishlist!")
            ChangeForm(wishlistPage)
        } else
            NSB.MsgBox("There was a problem creating the wishlist")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
}

//Navigation
hamNavNewWish.onclick=function(x){
    if (typeof(x) == "object") 
    return
    
  switch(x) {
case "Home Page":
    ChangeForm(homePage)
    break
  case "Wishlists":
    ChangeForm(wishlistsPage)
    break
case "Amazon":
    ChangeForm(amazonPage)
    break
case "Log Out":
    ChangeForm(loginPage)
    break
}
}


