const header = document.querySelector("header");
const cart = document.querySelector(".cart");
const menu = document.querySelector(".menu");
const cartIcon = header.lastElementChild;
const menuIcon = header.firstElementChild;
const quitIcon = cartIcon.querySelector("img");
const closeIcon = menu.lastElementChild;
const iconRemove = document.querySelectorAll(".cart__remove");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("showCart");
    
    if (cart.classList.contains("showCart")) {
        quitIcon.setAttribute("src", "img/x-icon.svg");
    } else {
        quitIcon.setAttribute("src", "img/shopping-cart-icon.svg");
    }
});

iconRemove.forEach((icon) => {
    icon.addEventListener("click", () => {
        const iconParent = icon.parentElement;
        iconParent.remove();
    });
});

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
});

closeIcon.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
});