const navbar = document.querySelector("nav");
const open = document.getElementById("btn-menu");
const close = document.getElementById("btn-close");

open.addEventListener("click", () => {
    navbar.classList.add("nav-open");
})

close.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
})
