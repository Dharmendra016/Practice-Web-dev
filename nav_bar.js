document.addEventListener("scroll" , navbar);

function navbar(){
    var element = document.querySelector(".nav-bar");
    element.style.backgroundColor = "red";
    element.style.position = "sticky";
}