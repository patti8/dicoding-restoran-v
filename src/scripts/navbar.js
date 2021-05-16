
// navbar 
const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
})

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
})
