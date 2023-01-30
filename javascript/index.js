let windowWidth = window.innerWidth;

const openMenu = () => {
    if (windowWidth <= 768) {
        mobileMenu.classList.add("opened");
    }
}

const closeMenu = (target, element) => {
    if (target === element) mobileMenu.classList.remove("opened");
}

const checkWindowSize = (size) => {
    if (size >= 870) {
        projectRow_1.setAttribute("data-aos", "fade-right");
        projectRow_2.setAttribute("data-aos", "fade-left");
    } else {
        Array.from(projects).forEach((element) => {
            element.setAttribute("data-aos", "fade-right");
        });
    }
}

window.addEventListener("resize", () => windowWidth = window.innerWidth);

(() => {
    checkWindowSize(windowWidth);
})();

AOS.init();

menuButton.addEventListener("click", openMenu);

mobileMenu.addEventListener("click", ({ target }) => closeMenu(target, mobileMenu));

mobileLinks.forEach((element) => {
    element.addEventListener("click", ({ target }) => closeMenu(target, element));
});

closeButton.addEventListener("click", ({ target }) => closeMenu(target, closeButton));