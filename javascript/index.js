let windowWidth = window.innerWidth;

const openMenu = () => {
    if (windowWidth <= 768) {
        mobileMenu.classList.add("opened");
    }
}

const closeMenu = (target, element) => {
    if (target === element) mobileMenu.classList.remove("opened");
}

window.addEventListener("resize", () => windowWidth = window.innerWidth);

menuButton.addEventListener("click", openMenu);

mobileMenu.addEventListener("click", ({ target }) => closeMenu(target, mobileMenu));

mobileLinks.forEach((element) => {
    element.addEventListener("click", ({ target }) => closeMenu(target, element));
});

closeButton.addEventListener("click", ({ target }) => closeMenu(target, closeButton));