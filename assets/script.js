// Consts Declaretion

const menu = document.querySelector(".menu");
const menuTitle = document.querySelector(".menu__title");
const menuOptions = document.querySelector(".menu__options");

const returnTop = document.querySelector(".return__top");

// Arrow Functions

window.addEventListener("scroll", onScroll);

const changeMenu = () => {
    if (window.scrollY > 0) {
        menu.classList.add("scroll");
        menuTitle.classList.add("scroll");
        menuOptions.classList.add("scroll");
    } else {
        menu.classList.remove("scroll");
        menuTitle.classList.remove("scroll");
        menuOptions.classList.remove("scroll");
    }
}

const showReturn = () => {
    if (window.scrollY > 1200) {
        returnTop.classList.add("show");
    } else {
        returnTop.classList.remove("show");
    }
}

const activateSection = (section) => {
    const targetSession = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopPassed = targetSession >= sectionTop;

    const sectionEnds = sectionTop + sectionHeight;
    const sectionEndsPassed = sectionEnds <= targetSession;

    const sectionBounderies = sectionTopPassed && !sectionEndsPassed;

    const menuId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu__more a[href*=${menuId}]`)
    menuElement.classList.remove("active");

    if (sectionBounderies) {
        menuElement.classList.add("active");
    }
}

function onScroll() {
    changeMenu();
    showReturn();

    activateSection(start);
    activateSection(services);
    activateSection(relates);
}

const showMenu = () => {
    document.body.classList.add("menu__extends");
}

const hideReturn = () => {
    returnTop.classList.remove("show");
}

function menuOpen() {
    showMenu();
    hideReturn();
}

const hideMenu = () => {
    document.body.classList.remove("menu__extends");
}

function menuClose() {
    showReturn();
    hideMenu();
}

const changeColor = (id) => {
    document.documentElement.style.setProperty('--hue', id);
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700
}).reveal('#home, #home img, #home figure, #home li');