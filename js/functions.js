header = document.querySelector("header");
const cart = document.querySelector(".cart");
const menu = document.querySelector(".menu");
const cartIcon = document.querySelector(".header__cart");
const menuIcon = header.firstElementChild;
const quitIcon = cartIcon.querySelector("img");
const closeIcon = menu.lastElementChild;
const addBtn = document.querySelectorAll(".products__addBtn");
const counter = document.querySelector(".header__counter");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("showCart");
    
    if (cart.classList.contains("showCart")) {
        quitIcon.setAttribute("src", "img/x-icon.svg");
    } else {
        quitIcon.setAttribute("src", "img/shopping-cart-icon.svg");
    }
});

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
});

closeIcon.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
});

const buyDiv = document.createElement("div");
buyDiv.setAttribute("class", "cart__btn");

const buyBtn = document.createElement("button");
buyBtn.textContent = "COMPRAR";

buyDiv.append(buyBtn);

addBtn.forEach((product) => {
    product.addEventListener("click", () => {
        const products = product.parentElement;

        const productImage = products.querySelector("img").getAttribute("src");
        const productName = products.querySelector("h3").textContent;
        const productPrice = products.querySelector("p").textContent;
        
        const cartImage = document.createElement("img");
        cartImage.setAttribute("src", productImage);

        const cartName = document.createElement("p");
        cartName.textContent = productName;

        const cartPrice = document.createElement("p");
        cartPrice.textContent = productPrice;

        const trashBtn = document.createElement("i");
        trashBtn.setAttribute("class", "cart__remove");

        const trasBtnImage = document.createElement("img");
        trasBtnImage.setAttribute("src", "img/trash-icon.svg");
        trasBtnImage.setAttribute("alt", "Icono Quitar");

        trashBtn.append(trasBtnImage);

        trashBtn.addEventListener("click", () => {
            const iconParent = trashBtn.parentElement;
            iconParent.remove();

            const cartItems = cart.querySelectorAll(".cart__item");

            if (cartItems.length === 0) {
                buyDiv.remove();
            }

            counter.textContent = cartItems.length;

            if (cartItems.length === 0){
                counter.classList.remove("showCounter");
            }
        });

        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart__item");
        cart.append(cartDiv);       

        cartDiv.append(cartImage);
        cartDiv.append(cartName);
        cartDiv.append(cartPrice);
        cartDiv.append(trashBtn);

        if (!cart.contains(buyDiv)) {
            cart.append(buyDiv);
        } else {
            buyDiv.remove();
            cart.append(buyDiv);
        }

        const cartItems = cart.querySelectorAll(".cart__item");

        counter.textContent = cartItems.length;

        if (cartItems.length > 0) {
            counter.classList.add("showCounter");
        }
    });
});