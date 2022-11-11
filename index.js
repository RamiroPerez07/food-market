//array de base
const arrayPizzas = [
    {
        id:1,
        name: "La Mr. Pit",
        description: "Solo para expertos",
        price: 350,
        score: 100,
        url_img: "./img/pit.jpg"
    },
    {
        id:2,
        name: "¡Q' Jamone",
        description: "c/jamón crudo",
        price: 350,
        score: 150,
        url_img: "./img/jamone.jpg"
    },
    {
        id:3,
        name: "La charly garcia",
        description: "¡Basta!",
        price:380,
        score: 700,
        url_img: "./img/garcia.jpg"
    },
    {
        id:4,
        name: "La Maradona",
        description: "Eterna",
        price: 450,
        score: 360,
        url_img: "./img/maradona.jpg"
    },
    {
        id: 5,
        name: "Picantovich",
        description: "Pica dos veces",
        price: 750,
        score: 750,
        url_img: "./img/picantovich.jpg"
    },
    {
        id: 6,
        name: "La Hasbulla",
        description: "En honor al 1",
        price: 990,
        score: 160,
        url_img: "./img/hasbulla.jpg"
    },
    {
        id:7,
        name: "Leo Messi",
        description: "¡De pie señores!",
        price: 1100,
        score: 80,
        url_img: "./img/messi.jpg"
    },
    {
        id:8,
        name: "Nick Gi",
        description: "La que desaparece",
        price: 460,
        score: 170,
        url_img: "./img/nickgi.jpg"
    },
    {
        id:9,
        name: "Bennazianna",
        description: "La mas completa",
        price: 3650,
        score: 550,
        url_img: "./img/benneziana.jpg"
    },
    {
        id:10,
        name: "Tronco-Pizza",
        description: "Para todo el dia",
        price: 870,
        score: 160,
        url_img: "./img/troncopizza.jpg"
    },
    {
        id: 11,
        name: "Papas Provenzal",
        description: "Van como piña",
        price: 360,
        score: 120,
        url_img: "./img/papas-provenzal.jpg"
    }
]

//variables
const showShoppingCartBtn = document.getElementById("show-shopping-cart-btn")
const shoppingCart = document.getElementById("shopping-cart-popup");
const hideShoppingCartBtn = document.getElementById("quit-btn");
const shoppingCartFrame = document.getElementById("shopping-cart-frame")
const burguerBtn = document.getElementById("burguer-btn");
const navbarFrame = document.getElementById("navbar-frame");
const quitMenuBtn = document.getElementById("quit-menu")

function toggleShoppingCart(){
    console.log("entre aca")
    shoppingCart.classList.toggle("show-popup");
    shoppingCartFrame.classList.toggle("show-shopping-frame");
    navbarFrame.classList.remove("show-nav");
}

function showMenu(){
    navbarFrame.classList.toggle("show-nav");
}

function hideMenu(){
    navbarFrame.classList.remove("show-nav");
}


function init(){
    showShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    hideShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    burguerBtn.addEventListener("click", showMenu);
    quitMenuBtn.addEventListener("click", showMenu);
    window.addEventListener("scroll", hideMenu);
    navbarFrame.addEventListener("click", hideMenu);

}

init();