document.addEventListener("scroll" , function (){
    var container = document.querySelector(".container");
    container.classList.toggle("sticky" , window.scrollY > 0);
})