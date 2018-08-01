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

    var accordeon = document.querySelectorAll(".accordeon__full-name");
    for(var i = 0; i < accordeon.length;i++){
        
        accordeon[i].addEventListener("click", function(event){
            for(var i = 0; i < accordeon.length; i++){
                accordeon[i].parentElement.lastElementChild.classList.add("accordeon__people-height");
                accordeon[i].firstElementChild.classList.remove("accordeon__arrow-up");
                accordeon[i].lastElementChild.classList.remove("accordeon__name-yellow");
            }
            event.target.previousElementSibling.classList.add("accordeon__arrow-up");
            event.target.classList.add("accordeon__name-yellow");
            event.path[2].lastElementChild.classList.remove("accordeon__people-height");
        });
    }
}