let windowWidth = window.innerWidth;

const openMenu = () => {
    if (windowWidth <= 768) console.log("abrir menu")
}

window.addEventListener("resize", () => windowWidth = window.innerWidth);
menuButton.addEventListener("click", openMenu);