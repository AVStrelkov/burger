window.onload = init;

function init(){
    let menu = document.querySelector(".slim-menu");
    let menuContainer = document.querySelector(".hamburgermenu");
    let body = document.querySelector("body");
    let team = document.querySelector(".accordeon__list");

    function toggleMenu(e){
        menuContainer.classList.toggle("is-active");
        menu.classList.toggle("rotate");
        body.classList.toggle("body-active");
    }
    menu.addEventListener("click", toggleMenu);

    menuContainer.addEventListener("click", function(e){
        
        if(e.target.className === "sidebar__link") toggleMenu();
    });

    team.addEventListener("click", teamAccordeon);

    function teamAccordeon(e){
        for(let i=0; i < team.children.length; i++){
            let peopleHeight = team.children[i].lastElementChild;
            peopleHeight.classList.add("accordeon__people-height");
        }
        let arrow = e.target.previousElementSibling;
        let people = e.target.parentElement.nextElementSibling;
        // console.log(people);
        arrow.classList.toggle("accordeon__arrow-up");
        people.classList.toggle("accordeon__people-height");
    }

    // slider

    let wrapper = document.querySelector(".wrapper-sleder");
    let content = document.querySelector(".content");
    let btnLeft = document.querySelector(".slide-arrow__left");
    let btnRight = document.querySelector(".slide-arrow__right");
    let slide = document.querySelectorAll(".slide");
    let computed = content.clientWidth;
    let right = 0;
    slide[0].style.width = computed + "px";
    slide[1].style.width = computed + "px";
    slide[2].style.width = computed + "px";
    wrapper.style.width = computed * slide.length + "px";
    // console.dir(content.clientWidth);

    
    
    btnLeft.addEventListener("click", function(e){
        e.preventDefault();
        let wrapperRight = parseInt(wrapper.style.right);
        let wrapperWidth = parseInt(wrapper.style.width);
        if (wrapperRight <= -wrapperWidth + computed){
            wrapper.style.right = 0 + "px";
            let right = wrapper.style.right/computed;
        } else{
            wrapper.style.right = wrapperRight - computed +"px";
        }
    });
    btnRight.addEventListener("click", function(e){
        e.preventDefault();
        let wrapperRight = parseInt(wrapper.style.right);
        let wrapperWidth = parseInt(wrapper.style.width);
        if (wrapperRight >= 0){
            wrapper.style.right = -wrapperWidth + computed + "px";
            let right = wrapper.style.right/computed;
        } else{
            wrapper.style.right = wrapperRight + computed +"px";
        }
    });
    
    
    window.addEventListener('resize', function(){
    // let wrapperRight = document.querySelector(".wrapper-sleder");
    let content = document.querySelector(".content");
    let slide = document.querySelectorAll(".slide");
    let computed = content.clientWidth;
    slide[0].style.width = computed + "px";
    slide[1].style.width = computed + "px";
    slide[2].style.width = computed + "px";
    wrapper.style.width = computed * slide.length + "px";
    let wrapperRight = parseInt(wrapper.style.right);
    let right = wrapperRight/computed;
    wrapper.style.right=right*computed+"px";
    // wrapper.style.right = computed * right;
    console.log(right);
});
    
}


//     var nav = document.querySelectorAll(".navigation__link");
//     for(var i =0; i < nav.length; i++){
    //         nav[i].addEventListener("click", function(event){
        //             for(var i=0; i < nav.length; i++){
            //                 nav[i].classList.remove("navigation__active");
            //             }
            //             event.target.classList.add("navigation__active");
            //         });
            //     }
            
            //     var accordeon = document.querySelectorAll(".accordeon__full-name");
//     for(var i = 0; i < accordeon.length;i++){
    
    //         accordeon[i].addEventListener("click", function(event){
//             for(var i = 0; i < accordeon.length; i++){
//                 accordeon[i].parentElement.lastElementChild.classList.add("accordeon__people-height");
//                 accordeon[i].firstElementChild.classList.remove("accordeon__arrow-up");
//                 accordeon[i].lastElementChild.classList.remove("accordeon__name-yellow");
//             }
//             event.target.previousElementSibling.classList.add("accordeon__arrow-up");
//             event.target.classList.add("accordeon__name-yellow");
//             event.path[2].lastElementChild.classList.remove("accordeon__people-height");
//         });
//     }
// }