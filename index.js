//array de base
const arrayPizzas = [
    {
        id:1,
        name: "La Mr. Pit",
        description: "Solo para expertos",
        price: 350,
        score: 100,
        url_img: "./img/pit.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:2,
        name: "¡Q' Jamone",
        description: "c/jamón crudo",
        price: 350,
        score: 150,
        url_img: "./img/jamone.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:3,
        name: "La charly garcia",
        description: "¡Basta!",
        price:380,
        score: 700,
        url_img: "./img/garcia.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:4,
        name: "La Maradona",
        description: "Eterna",
        price: 450,
        score: 360,
        url_img: "./img/maradona.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id: 5,
        name: "Picantovich",
        description: "Pica dos veces",
        price: 750,
        score: 750,
        url_img: "./img/picantovich.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id: 6,
        name: "La Hasbulla",
        description: "En honor al 1",
        price: 990,
        score: 160,
        url_img: "./img/hasbulla.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:7,
        name: "Leo Messi",
        description: "¡De pie señores!",
        price: 1100,
        score: 80,
        url_img: "./img/messi.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:8,
        name: "Nick Gi",
        description: "La que desaparece",
        price: 460,
        score: 170,
        url_img: "./img/nickgi.jpg",
        category: "more-popular pizzas",
        recommended: false
    },
    {
        id:9,
        name: "Bennazianna",
        description: "La mas completa",
        price: 3650,
        score: 550,
        url_img: "./img/benneziana.jpg",
        category: "pizzas",
        recommended: true
    },
    {
        id:10,
        name: "Tronco-Pizza",
        description: "Para todo el dia",
        price: 870,
        score: 160,
        url_img: "./img/troncopizza.jpg",
        category: "pizzas",
        recommended: true
    },
    {
        id: 11,
        name: "Papas Provenzal",
        description: "Van como piña",
        price: 360,
        score: 120,
        url_img: "./img/papas-provenzal.jpg",
        category: "napapuki",
        recommended: true
    },
    {
        id: 12,
        name: "Cochinambur",
        description: "¡Super completa!",
        price: 1200,
        score: 780,
        url_img: "./img/cochina.jpg",
        category: "hamburguesas",
        recommended: false
    },
    {
        id: 13,
        name: "Cheddarx2",
        description: "¡Doble sabor!",
        price: 800,
        score: 480,
        url_img: "./img/doblecheddar.jpg",
        category: "hamburguesas",
        recommended: false
    },
    {
        id: 14,
        name: "Onion",
        description: "Cebolla morada",
        price: 740,
        score: 380,
        url_img: "./img/onionbacon.jpg",
        category: "hamburguesas",
        recommended: false
    },
    {
        id: 15,
        name: "Baconpleta",
        description: "Panceta + cheddar",
        price: 1340,
        score: 870,
        url_img: "./img/completa-cheddar.jpg",
        category: "hamburguesas",
        recommended: false
    },
    {
        id: 16,
        name: "Kiwitido",
        description: "Sabor Kiwi natural",
        price: 600,
        score: 170,
        url_img: "./img/kiwi.jpg",
        category: "batidos",
        recommended: false
    },
    {
        id: 17,
        name: "Duraznito",
        description: "Sabor natural",
        price: 600,
        score: 270,
        url_img: "./img/durazno.jpg",
        category: "batidos",
        recommended: false
    },
    {
        id: 18,
        name: "Frutos Rojos",
        description: "Moras y Frutilla",
        price: 600,
        score: 570,
        url_img: "./img/frutosrojos.jpg",
        category: "batidos",
        recommended: false
    },
    {
        id: 19,
        name: "Platano",
        description: "Sabor banana",
        price: 600,
        score: 1170,
        url_img: "./img/banana.jpg",
        category: "batidos",
        recommended: false
    },
    {
        id: 20,
        name: "Taco Cargado",
        description: "Re picante",
        price: 600,
        score: 110,
        url_img: "./img/tacocargado.jpg",
        category: "mexican-food",
        recommended: false
    },
    {
        id: 20,
        name: "Fritas simples",
        description: "Papas sin aderezo",
        price: 500,
        score: 710,
        url_img: "./img/simples.jpg",
        category: "napapuki",
        recommended: false
    },
]

//variables
const showShoppingCartBtn = document.getElementById("show-shopping-cart-btn")
const shoppingCart = document.getElementById("shopping-cart-popup");
const hideShoppingCartBtn = document.getElementById("quit-btn");
const shoppingCartFrame = document.getElementById("shopping-cart-frame")
const burguerBtn = document.getElementById("burguer-btn");
const navbarFrame = document.getElementById("navbar-frame");
const quitMenuBtn = document.getElementById("quit-menu")
let categoriesCards = document.getElementsByClassName("categories-card")
categoriesCards = [...categoriesCards]

//variables contenedores
const morePopularContainer = document.getElementById("more-popular-card-container")
const categoriesContainer = document.getElementById("categories-card-container")
const recommendationContainer = document.getElementById("recommendations-card-container")

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
        <span class="more-popular-price gradient-text">${object.price}</span>
        <button class="more-popular-btn btn-style">Agregar</button>
    </div>
    `
}

function renderRecommendationCard(object){
    return `
    <div class="recommendation-card">
        <div class="recommendation-img" style="background-image: url('${object.url_img}')"></div>
        <h4 class="recommendation-food-name">${object.name}</h4>
        <p class="recommendation-description">${object.description}</p>
        <span class="recommendation-price gradient-text">${object.price}</span>
        <button class="btn-style recommendation-btn">Agregar</button>
    </div>
    `
}

function renderErrorCard(){
    morePopularContainer.innerHTML = `
    <div class="error-card">
        <p class="error-card-txt">¡Próximamente!</p>
    </div>
    `
}

function renderPizzasInSelectionContainer(arrayOfObjects){
    const html = arrayOfObjects.map(obj =>{
        return renderSelectionCard(obj);
    }).join("")
    morePopularContainer.innerHTML = html;
}

function searchAndRenderPizzasInRecommendationContainer(){
    const arrayPizzas = getItemFromLocalStorage("pizzas");
    const recommendedPizzas = arrayPizzas.filter(objPizza =>{
        return objPizza.recommended == true;
    });
    const html = recommendedPizzas.map(obj =>{
        return renderRecommendationCard(obj);
    }).join("")
    recommendationContainer.innerHTML = html;
}

function selectCategory(event){
    let categoryCard;
    if (!event.target.parentElement.classList.contains("categories-card") && !event.target.classList.contains("categories-card")){
        return
    }else if (event.target.parentElement.classList.contains("categories-card")){
        categoryCard = event.target.parentElement;
    }else{
        categoryCard = event.target;
    }
    const categoryValue = categoryCard.dataset.filter

    const filterPizzas = filterObject(categoryValue)

    if(!filterPizzas.length){
        renderErrorCard()
        categoryCard.classList.add("selected-category");
    }else{
        renderPizzasInSelectionContainer(filterPizzas);
    }
    categoriesCards.forEach(card =>{
        if (card.classList.contains("selected-category")){
            card.classList.remove("selected-category")
        }
    })
    categoryCard.classList.add("selected-category");
}

function filterObject(tag){
    const arrayPizzas = getItemFromLocalStorage("pizzas");
    const filterPizzas = arrayPizzas.filter(objPizza =>{
        return objPizza.category.toString().includes(tag);
    })
    saveDataInLocalStorage(filterPizzas,"ult-filtro");
    return filterPizzas;
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

    //muestro las pizzas recomendadas
    searchAndRenderPizzasInRecommendationContainer()

    //al principio filtro por los mas populares
    const filterPizzas = filterObject("more-popular")
    //renderizo las pizzas mas populares
    renderPizzasInSelectionContainer(filterPizzas);

    categoriesContainer.addEventListener("click",selectCategory)
}

init();