//variables
const showShoppingCartBtn = document.getElementById("show-shopping-cart-btn")
const shoppingCart = document.getElementById("shopping-cart-popup");
const hideShoppingCartBtn = document.getElementById("quit-btn");
const shoppingCartFrame = document.getElementById("shopping-cart-frame")
const burguerBtn = document.getElementById("burguer-btn");
const navbarFrame = document.getElementById("navbar-frame")

function toggleShoppingCart(){
    console.log("entre aca")
    shoppingCart.classList.toggle("show-popup");
    shoppingCartFrame.classList.toggle("show-shopping-frame");
    navbarFrame.classList.remove("show-nav");
}

function showMenu(){
    navbarFrame.classList.toggle("show-nav");
}


function init(){
    showShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    hideShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    burguerBtn.addEventListener("click", showMenu)
}

init();