
btnWishlists.onclick=function(){
  ChangeForm(wishlistPage)
}

btnAmazon.onclick=function(){
  ChangeForm(amazonPage)
}

hamNav.onclick=function(h){
  hamNavWish.onclick=function(h){
    if (typeof(h) == "object") 
    return
    
  switch(h) {
case "Wishlists":
    ChangeForm(wishlistPage)
    break
case "Amazon":
    ChangeForm(amazonPage)
    break
case "Log Out":
    ChangeForm(loginPage)
    break
}
}
