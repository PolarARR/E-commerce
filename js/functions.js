const header = document.querySelector("header");
const cart = document.querySelector(".cart");
const cartIcon = header.lastElementChild;

cartIcon.addEventListener("click", () => {
    const quitIcon = cartIcon.querySelector("img");
    cart.classList.toggle("show");
    
    if (cart.classList.contains("show")) {
        quitIcon.setAttribute("src", "img/x-icon.svg");
    } else {
        quitIcon.setAttribute("src", "img/shopping-cart-icon.svg");
    }
});

const iconRemove = document.querySelectorAll(".cart__remove");

iconRemove.forEach((icon) => {
    icon.addEventListener("click", () => {
        const iconParent = icon.parentElement;
        iconParent.remove();
    });
});