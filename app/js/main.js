window.onload = init;

function init(){
    var nav = document.querySelectorAll(".navigation__link");
    for(var i =0; i < nav.length; i++){
        nav[i].addEventListener("click", function(event){
            for(var i=0; i < nav.length; i++){
                nav[i].classList.remove("navigation__active");
            }
            event.target.classList.add("navigation__active");
        });
    }
}