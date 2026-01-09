//layout drowpdown large layout
const layouts_menu_button = document.getElementById("layouts_menu");
const layouts_menu_list = document.getElementById("dropdown_layouts");
layouts_menu_button.addEventListener("mouseenter", appear);
layouts_menu_list.addEventListener("mouseenter", appear);
layouts_menu_button.addEventListener("mouseleave", disappear);
layouts_menu_list.addEventListener("mouseleave", disappear);

function menu_repos() {
        var pos = layouts_menu_button.offsetLeft + (layouts_menu_button.offsetWidth / 2) - (layouts_menu_list.offsetWidth / 2)
        layouts_menu_list.style.left = pos + "px";
};

function appear() {
    menu_repos();
    layouts_menu_list.style.opacity = '1';
    layouts_menu_list.style.transition = 'none';
    layouts_menu_list.style.visibility = 'visible'
}

function disappear() {
    layouts_menu_list.style.transition = '.5s';
    layouts_menu_list.style.opacity = '0';
    layouts_menu_list.style.visibility = 'hidden';
}

//layout dropwdown small layout
const menu_button = document.getElementById("menu_button");
const dropdown = document.getElementById("dropdown");
const nav_contact = document.getElementById("nav_contact");
const nav_layouts = document.getElementById("nav_layouts");
const head = document.getElementById("head");
const logo_small = document.getElementById("logo_small");
const logo_link = document.getElementById("logo_link");

menu_button.addEventListener("click", () => {
    dropdown.classList.toggle("hide");
    head.classList.remove("tall");
    dropdown_layouts_small.classList.add("hide");
});

nav_contact.addEventListener("click", () => {
    dropdown.classList.toggle("hide");
    head.classList.remove("tall");
    dropdown_layouts_small.classList.add("hide");
});

nav_layouts.addEventListener("click", () => {
    dropdown_layouts_small.classList.toggle("hide");
    head.classList.toggle("tall");  
});

window.onresize = function () {
    var pos = ((screen.width / 2) - (logo_small.offsetWidth / 2)) - 75;
    logo_link.style.marginLeft = pos +"px";
    dropdown.classList.add("hide")
};

window.onload = function () {
    var pos = ((screen.width / 2) - (logo_small.offsetWidth / 2)) - 75;
    logo_link.style.marginLeft = pos +"px";
};