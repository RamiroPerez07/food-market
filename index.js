//array de base
const arrayPizzas = [
    {
        id:1,
        name: "La Mr. Pit",
        description: "Solo para expertos",
        price: 350,
        score: 100,
        url_img: "./img/pit.jpg",
        category: "more popular"
    },
    {
        id:2,
        name: "¡Q' Jamone",
        description: "c/jamón crudo",
        price: 350,
        score: 150,
        url_img: "./img/jamone.jpg",
        category: "more popular"
    },
    {
        id:3,
        name: "La charly garcia",
        description: "¡Basta!",
        price:380,
        score: 700,
        url_img: "./img/garcia.jpg",
        category: "more popular"
    },
    {
        id:4,
        name: "La Maradona",
        description: "Eterna",
        price: 450,
        score: 360,
        url_img: "./img/maradona.jpg",
        category: "more popular"
    },
    {
        id: 5,
        name: "Picantovich",
        description: "Pica dos veces",
        price: 750,
        score: 750,
        url_img: "./img/picantovich.jpg",
        category: "more popular"
    },
    {
        id: 6,
        name: "La Hasbulla",
        description: "En honor al 1",
        price: 990,
        score: 160,
        url_img: "./img/hasbulla.jpg",
        category: "more popular"
    },
    {
        id:7,
        name: "Leo Messi",
        description: "¡De pie señores!",
        price: 1100,
        score: 80,
        url_img: "./img/messi.jpg",
        category: "more popular"
    },
    {
        id:8,
        name: "Nick Gi",
        description: "La que desaparece",
        price: 460,
        score: 170,
        url_img: "./img/nickgi.jpg",
        category: "more popular"
    },
    {
        id:9,
        name: "Bennazianna",
        description: "La mas completa",
        price: 3650,
        score: 550,
        url_img: "./img/benneziana.jpg",
        category: "more popular"
    },
    {
        id:10,
        name: "Tronco-Pizza",
        description: "Para todo el dia",
        price: 870,
        score: 160,
        url_img: "./img/troncopizza.jpg",
        category: "more popular"
    },
    {
        id: 11,
        name: "Papas Provenzal",
        description: "Van como piña",
        price: 360,
        score: 120,
        url_img: "./img/papas-provenzal.jpg",
        category: "more popular"
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

//variables contenedores
const morePopularContainer = document.getElementById("more-popular-card-container")
const categoriesContainer = document.getElementById("categories-card-container")

//local storage

function saveDataInLocalStorage(arrayOfObjects, key="pizzas"){
    localStorage.setItem(key,JSON.stringify(arrayOfObjects))
}

function getItemFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}


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

function renderSelectionCard(object){
    return `
    <div class="more-popular-card">
        <div class="more-popular-img" style="background-image: url('${object.url_img}')"></div>
        <h4 class="more-popular-food-name">${object.name}</h4>
        <p class="more-popular-description">${object.description}</p>
        <span class="more-popular-price">${object.price}</span>
        <button class="more-popular-btn btn-style">Agregar</button>
    </div>
    `
}

function renderPizzasInSelectionContainer(arrayOfObjects){
    const html = arrayOfObjects.map(obj =>{
        return renderSelectionCard(obj);
    }).join("")
    morePopularContainer.innerHTML = html;
}

function setSelectedCategory(event){
    const categoryCard = event.target;
    if (!categoryCard.classList.contains("categories-card")) return
    const categoryValue = event.target.dataset.filter
    const arrayPizzas = getItemFromLocalStorage("pizzas");
    const filterPizzas = arrayPizzas.forEach(objPizza =>{
        return objPizza.category == categoryValue;
    })
    saveDataInLocalStorage(filterPizzas,"ult-filtro");
    renderPizzasInSelectionContainer(filterPizzas);
    categoryCard.classList.add("selected-category");
}


function init(){

    //eventos
    showShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    hideShoppingCartBtn.addEventListener("click", toggleShoppingCart)
    burguerBtn.addEventListener("click", showMenu);
    quitMenuBtn.addEventListener("click", showMenu);
    window.addEventListener("scroll", hideMenu);
    navbarFrame.addEventListener("click", hideMenu);
    
    //Guardo el array de pizzas en el local storage (simulo que los datos vienen de una BD)
    saveDataInLocalStorage(arrayPizzas,"pizzas")

    //Inicio llamando todas las pizzas del local storage
    const arrPizzas = getItemFromLocalStorage("pizzas");

    //renderizo las pizzas mas populares
    renderPizzasInSelectionContainer(arrPizzas);

    categoriesContainer.addEventListener("click",setSelectedCategory)
}

init();