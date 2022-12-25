// javascript

const get = element => document.getElementById(element);
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    document.querySelector(".window-width").innerHTML = width
})

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('nav-open');
})

exit.addEventListener('click', () => {
    nav.classList.remove('nav-open');
})