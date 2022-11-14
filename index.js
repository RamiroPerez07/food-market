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
        recommended: false,
        stock: 8,
        free_shipment: true,
    },
    {
        id:2,
        name: "¡Q' Jamone",
        description: "c/jamón crudo",
        price: 350,
        score: 150,
        url_img: "./img/jamone.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 12,
        free_shipment: false,
    },
    {
        id:3,
        name: "La charly garcia",
        description: "¡Basta!",
        price:380,
        score: 700,
        url_img: "./img/garcia.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 13,
        free_shipment: false,
    },
    {
        id:4,
        name: "La Maradona",
        description: "Eterna",
        price: 450,
        score: 360,
        url_img: "./img/maradona.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 6,
        free_shipment: true,
    },
    {
        id: 5,
        name: "Picantovich",
        description: "Pica dos veces",
        price: 750,
        score: 750,
        url_img: "./img/picantovich.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 15,
        free_shipment: true,
    },
    {
        id: 6,
        name: "La Hasbulla",
        description: "En honor al 1",
        price: 990,
        score: 160,
        url_img: "./img/hasbulla.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 14,
        free_shipment: false,
    },
    {
        id:7,
        name: "Leo Messi",
        description: "¡De pie señores!",
        price: 1100,
        score: 80,
        url_img: "./img/messi.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 8,
        free_shipment: true,
    },
    {
        id:8,
        name: "Nick Gi",
        description: "La que desaparece",
        price: 460,
        score: 170,
        url_img: "./img/nickgi.jpg",
        category: "more-popular pizzas",
        recommended: false,
        stock: 8,
        free_shipment: false,
    },
    {
        id:9,
        name: "Bennazianna",
        description: "La mas completa",
        price: 3650,
        score: 550,
        url_img: "./img/benneziana.jpg",
        category: "pizzas",
        recommended: true,
        stock: 16,
        free_shipment: true,
    },
    {
        id:10,
        name: "Tronco-Pizza",
        description: "Para todo el dia",
        price: 870,
        score: 160,
        url_img: "./img/troncopizza.jpg",
        category: "pizzas",
        recommended: true,
        stock: 18,
        free_shipment: false,
    },
    {
        id: 11,
        name: "Papas Provenzal",
        description: "Van como piña",
        price: 360,
        score: 120,
        url_img: "./img/papas-provenzal.jpg",
        category: "napapuki",
        recommended: true,
        stock: 4,
        free_shipment: true,
    },
    {
        id: 12,
        name: "Cochinambur",
        description: "¡Super completa!",
        price: 1200,
        score: 780,
        url_img: "./img/cochina.jpg",
        category: "hamburguesas",
        recommended: false,
        stock: 3,
        free_shipment: false,
    },
    {
        id: 13,
        name: "Cheddarx2",
        description: "¡Doble sabor!",
        price: 800,
        score: 480,
        url_img: "./img/doblecheddar.jpg",
        category: "hamburguesas",
        recommended: false,
        stock: 7,
        free_shipment: true,
    },
    {
        id: 14,
        name: "Onion",
        description: "Cebolla morada",
        price: 740,
        score: 380,
        url_img: "./img/onionbacon.jpg",
        category: "hamburguesas",
        recommended: false,
        stock: 18,
        free_shipment: false,
    },
    {
        id: 15,
        name: "Baconpleta",
        description: "Panceta + cheddar",
        price: 1340,
        score: 870,
        url_img: "./img/completa-cheddar.jpg",
        category: "hamburguesas",
        recommended: false,
        stock: 6,
        free_shipment: true,
    },
    {
        id: 16,
        name: "Kiwitido",
        description: "Sabor Kiwi natural",
        price: 600,
        score: 170,
        url_img: "./img/kiwi.jpg",
        category: "batidos",
        recommended: false,
        stock: 8,
        free_shipment: false,
    },
    {
        id: 17,
        name: "Duraznito",
        description: "Sabor natural",
        price: 600,
        score: 270,
        url_img: "./img/durazno.jpg",
        category: "batidos",
        recommended: false,
        stock: 6,
        free_shipment: true,
    },
    {
        id: 18,
        name: "Frutos Rojos",
        description: "Moras y Frutilla",
        price: 600,
        score: 570,
        url_img: "./img/frutosrojos.jpg",
        category: "batidos",
        recommended: false,
        stock: 8,
        free_shipment: false,
    },
    {
        id: 19,
        name: "Platano",
        description: "Sabor banana",
        price: 600,
        score: 1170,
        url_img: "./img/banana.jpg",
        category: "batidos",
        recommended: false,
        stock: 7,
        free_shipment: false,
    },
    {
        id: 20,
        name: "Taco Cargado",
        description: "Re picante",
        price: 600,
        score: 110,
        url_img: "./img/tacocargado.jpg",
        category: "mexican-food",
        recommended: false,
        stock: 6,
        free_shipment: true,
    },
    {
        id: 21,
        name: "Fritas simples",
        description: "Papas sin aderezo",
        price: 500,
        score: 710,
        url_img: "./img/simples.jpg",
        category: "napapuki",
        recommended: false,
        stock: 5,
        free_shipment: false,
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
let categoriesCards = document.getElementsByClassName("categories-card");
categoriesCards = [...categoriesCards]
const subtotalField = document.getElementById("subtotal-value");
const shippingField = document.getElementById("shipping-value");
const totalField = document.getElementById("total-value")
const btnBuy = document.getElementById("buy-btn");
const btnViewMoreProducts = document.getElementById("view-more-products")

//variables contenedores
const morePopularContainer = document.getElementById("more-popular-card-container")
const categoriesContainer = document.getElementById("categories-card-container")
const recommendationContainer = document.getElementById("recommendations-card-container")
const shoppingCartContainer = document.getElementById("product-list-container");

//costo del envio
const shippingCost = 200;

//local storage

function saveDataInLocalStorage(arrayOfObjects, key="pizzas"){
    localStorage.setItem(key,JSON.stringify(arrayOfObjects))
}

function getItemFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}


function toggleShoppingCart(){
    shoppingCart.classList.toggle("show-popup");
    shoppingCartFrame.classList.toggle("show-shopping-frame");
    navbarFrame.classList.remove("show-nav");
    if(!shoppingCart.classList.contains("show-popup")) return //o sea, si no esta visible, que no se ejecute nada de aca para abajo
    //esto se ejecutaria cuando el carro este abierto
    const shoppingCartProducts = getItemFromLocalStorage("products-in-shopping-cart")
    renderProductsInShoppingCart(shoppingCartProducts);
    //muestro el subtotal
    calculateSubtotal()
}

function showMenu(){
    navbarFrame.classList.toggle("show-nav");
}

function hideMenu(){
    navbarFrame.classList.remove("show-nav");
}

function renderSelectionCard(object){
    return `
    <div class="more-popular-card card" data-id="${object.id}">
        <div class="more-popular-img" style="background-image: url('${object.url_img}')"></div>
        <h4 class="more-popular-food-name">${object.name}</h4>
        <p class="more-popular-description">${object.description}</p>
        <span class="more-popular-price gradient-text">${object.price}</span>
        <button class="more-popular-btn btn-style btn-add-product">Agregar</button>
    </div>
    `
}

function renderRecommendationCard(object){
    return `
    <div class="recommendation-card card" data-id="${object.id}">
        <div class="recommendation-img" style="background-image: url('${object.url_img}')"></div>
        <h4 class="recommendation-food-name">${object.name}</h4>
        <p class="recommendation-description">${object.description}</p>
        <span class="recommendation-price gradient-text">${object.price}</span>
        <button class="btn-style recommendation-btn btn-add-product">Agregar</button>
    </div>
    `
}

function renderProducts(object){
    return `
    <div class="product-card" data-id="${object.id}">
        <div class="product-img" style="background-image: url('${object.url_img}')"></div>
        <h4 class="product-name">${object.name}</h4>
        <p class="product-desc">${object.description}</p>
        <span class="product-price">${object.price}</span>
        <div class="quit-btn quit-product"></div>
        <div class="quantity-container">
            <div class="less quantity-controllers btn-style ${object.quantity==1?"btn-disabled":""}">-</div>
            <span class="quantity">${object.quantity}</span>
            <div class="more quantity-controllers btn-style ${object.quantity == object.stock?"btn-disabled":""}">+</div>
        </div>
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

function renderProductsInShoppingCart(arrayObjects){
    const html = arrayObjects.map(obj=>{
        return renderProducts(obj);
    }).join("")
    shoppingCartContainer.innerHTML = html;
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

    const filterPizzas = filterObjectByTag(categoryValue)

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

function filterObjectByTag(tag){
    const arrayPizzas = getItemFromLocalStorage("pizzas");
    const filterPizzas = arrayPizzas.filter(objPizza =>{
        return objPizza.category.toString().includes(tag);
    })
    saveDataInLocalStorage(filterPizzas,"ult-filtro");
    return filterPizzas;
}

function filterObjectById(id, arrayObject){
    const filterPizzas = arrayObject.filter(objPizza =>{
        return objPizza.id == id;
    })
    return filterPizzas;
}

function addProductToShoppingCart(event){
    if (!event.target.classList.contains("btn-add-product")) return
    const idProduct = event.target.parentElement.dataset.id //busco el producto con la info del dataset
    const arrayPizzas = getItemFromLocalStorage("pizzas"); //llamo todas las pizzas
    let ArrayObjProduct = filterObjectById(idProduct, arrayPizzas) //filtro por el id, que capture del dataset
    ArrayObjProduct[0].quantity = 1; //le asigno en principio cantidad = 1 como propiedad
    let arrayPizzasInShoppingCart = getItemFromLocalStorage("products-in-shopping-cart")
    const repeatedId = arrayPizzasInShoppingCart.find(pizza =>{
        return pizza.id == idProduct
    })
    if (repeatedId) return (console.log("error - el producto ya se encuentra en el carrito!"))
    arrayPizzasInShoppingCart = [...arrayPizzasInShoppingCart, ArrayObjProduct[0]] //me devuelve un array, por eso elijo el objeto en posicion 1
    saveDataInLocalStorage(arrayPizzasInShoppingCart,"products-in-shopping-cart"); 
}

function quitProductFromShoppingCart(idProduct){
    const productsInShoppingCart = getItemFromLocalStorage("products-in-shopping-cart")
    console.log(idProduct)
    const updatedListOfProducts = productsInShoppingCart.filter(obj =>{
        return obj.id != idProduct;
    })
    console.log(updatedListOfProducts)
    saveDataInLocalStorage(updatedListOfProducts,"products-in-shopping-cart")
    renderProductsInShoppingCart(updatedListOfProducts);
    calculateSubtotal();
}



function changeQuantity(event){
    //puede pasar que el usuario quiera quitar, el producto, en este caso:
    if (event.target.classList.contains("quit-product")){
        quitProductFromShoppingCart(event.target.parentElement.dataset.id)
        return;
    }
    if (!event.target.classList.contains("quantity-controllers")) return //o sea si no es un controlador de cantidad, salir de la funcion
    //si es un controlador, sigue lo siguente
    //primero rescato el id del producto que se trata
    const idProduct = event.target.parentElement.parentElement.dataset.id 
    //ahora me traigo el producto en cuestion, en principio en forma de array
    //para eso SOLO llamo los productos que estan en el carro
    let productsInShoppingCart = getItemFromLocalStorage("products-in-shopping-cart")
    //ahora filtro por id
    const focusProduct = productsInShoppingCart.filter( (obj) =>{
        return obj.id == idProduct;
    })[0]
    //ahora pregunto si el boton es de agregar o de disminuir
    if(event.target.classList.contains("more")){
        if (focusProduct.quantity == focusProduct.stock) return
        focusProduct.quantity = focusProduct.quantity + 1;
    }else{
        if (focusProduct.quantity == 1) return
        focusProduct.quantity = focusProduct.quantity -1;
    }
    const updateProductsInShoppingCart = productsInShoppingCart.map(obj => {
        if(obj.id == idProduct){
            obj.quantity = focusProduct.quantity;
        }
        return obj;
    })
    saveDataInLocalStorage(updateProductsInShoppingCart, "products-in-shopping-cart")
    renderProductsInShoppingCart(updateProductsInShoppingCart);

    //ahora lo que hay que hacer es actualizar el subtotal, pero eso será a través de otra funcion
    calculateSubtotal()
}

function calculateSubtotal(){
    const productsInShoppingCart = getItemFromLocalStorage("products-in-shopping-cart");

    let subtotal = 0
    productsInShoppingCart.forEach(obj =>{
        subtotal = subtotal + (obj.quantity * obj.price)
    })
    subtotalField.textContent = "$ "+subtotal;
    const shipmentWithCharge = productsInShoppingCart.some(obj =>{
        return obj.free_shipment == false;
    })
    if (shipmentWithCharge){
        shippingField.textContent = "$ "+shippingCost
        totalField.textContent = "$ "+ (subtotal + shippingCost);
    }else{
        shippingField.textContent = "$ Gratis";
        totalField.textContent = "$ "+ subtotal;
    }
    //las lineas siguientes para limpiar el costo de envio cuando no hay nada
    if (!productsInShoppingCart.length){
        shippingField.textContent = ""
        return
    }
}

function executePurchase(){
    console.log("comprar")
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
    const filterPizzas = filterObjectByTag("more-popular")
    //renderizo las pizzas mas populares
    renderPizzasInSelectionContainer(filterPizzas);

    categoriesContainer.addEventListener("click",selectCategory)
    morePopularContainer.addEventListener("click", addProductToShoppingCart)
    recommendationContainer.addEventListener("click", addProductToShoppingCart)
    shoppingCartContainer.addEventListener("click",changeQuantity);
    btnBuy.addEventListener("click",executePurchase);
    btnViewMoreProducts.addEventListener("click", toggleShoppingCart);
}

init();