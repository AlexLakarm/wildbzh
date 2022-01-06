const menuBurger = document.querySelector(".menu--burger");
const cta = document.querySelector(".cta--burger");

function burgerMenu() {
    // permet de fermer ou ouvrir le menu burger
    if (menuBurger.classList.contains("open")) {
        menuBurger.style.transform = 'translateX(100%)';
        menuBurger.classList.remove("open")
    } else {
        menuBurger.style.transform = 'translateX(0%)';
        menuBurger.classList.add("open")
    }
}

cta.addEventListener("click", burgerMenu);