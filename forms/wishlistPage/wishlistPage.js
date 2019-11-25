//Swap to new wishlist page
btnNewWishlist.onclick=function(){
  ChangeForm(newWishlistPage)
}

//Navigation
hamNavWish.onclick=function(s){
    if (typeof(s) == "object") 
    return
    
  switch(s) {
case "Home Page":
    ChangeForm(homePage)
    break
case "Amazon":
    ChangeForm(amazonPage)
    break
case "Log Out":
    ChangeForm(loginPage)
    break
}
}

// populate list with wishlists
let wishlists = ["Birthday", "Christmas", "Anniversary"]

lstWishlists.onclick=function(wishlists){
  if (typeof(wishlist) == "object")
  return
  
  switch(wishlist) {
    case "Birthday":
      ChangeForm(wishlistBdayPage)
      break
    case "Christmas":
      ChangeForm(wishlistXmasPage)
      break
    case "Anniversary":
      ChangeForm(wishlistAnnivPage)
      break
}
}

