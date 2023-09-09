const menuButton = document.getElementById("menu");
const menu = document.querySelector("#all_menu");
const closeMenu = document.getElementById("close");

closeMenu.onclick = function(){
    menu.style.display = "none";
    closeMenu.style.display = "none";
}

function ShowMenu(){
    if(!menu.classList.contains("show_links")){
        menu.style.display = "grid";
        closeMenu.style.display = "block"
    }
}
menuButton.addEventListener("click", ShowMenu);