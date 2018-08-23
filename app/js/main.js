window.onload = init;

function init(){

    let menu = document.querySelector(".slim-menu");
    let menuContainer = document.querySelector(".hamburgermenu");
    let body = document.querySelector("body");
    

    function toggleMenu(e){
        menuContainer.classList.toggle("is-active");
        menu.classList.toggle("rotate");
        body.classList.toggle("body-active");
    }
    menu.addEventListener("click", toggleMenu);

    menuContainer.addEventListener("click", function(e){
        
        if(e.target.className === "sidebar__link") toggleMenu();
    });

    //accordeonTeam
   
    $(".accordeon__name").on("click", e =>{
        e.preventDefault();
        const $this = $(e.target);
        const link = $this.closest(".accordeon__link");
        const people = $this.closest(".accordeon__full-name").next(".accordeon__people");
        // console.log(people);
        
        const peoples = $(".accordeon__people");
        const links = $(".accordeon__link");
        if (!link.hasClass("is-activTeam")){
            links.removeClass("is-activTeam");
            link.addClass("is-activTeam");
            peoples.stop(true).slideUp();
            people.stop(true).slideDown();
        }else{
            link.removeClass("is-activTeam");
            people.stop(true).slideUp();
        }



    });

    // accordeonMenu();

    $(".menu__title").on("click", e =>{
        e.preventDefault();
        const $this = $(e.target);
        const link = $this.closest(".menu__list");
        const text = $this.next(".menu__text");
        const links = $(".menu__list");
        const texts = $(".menu__text");
        if(!link.hasClass("menu__list-width")){
            links.removeClass("menu__list-width");
            link.addClass("menu__list-width");
        }else{
            link.removeClass("menu__list-width");            
        }
    });

    // let team = document.querySelectorAll(".accordeon__full-name");
    // team.addEventListener("click", function(e){
    //     console.dir(e.target);        
    // })
   
    // team.addEventListener("click", teamAccordeon);

    // function teamAccordeon(){
    //     console.dir(this.children.length);
        // let arrow = e.target.previousElementSibling;
        // let people = e.target.parentElement.nextElementSibling;
        // console.log(arrow);
        // for(let i=0; i < team.children.length; i++){
        //     let peopleHeight = team.children[i].lastElementChild;
        //     peopleHeight.classList.add("accordeon__people-height");
        //     arrow.classList.remote("accordeon__arrow-up");
        // }
        // // console.log(people);
        // arrow.classList.add("accordeon__arrow-up");
        // people.classList.remote("accordeon__people-height");
    // }

    // slider

    let wrapper = document.querySelector(".wrapper-sleder");
    let content = document.querySelector(".content");
    let btnLeft = document.querySelector(".slide-arrow__left");
    let btnRight = document.querySelector(".slide-arrow__right");
    let slide = document.querySelectorAll(".slide");
    let computed = content.clientWidth;
    let right = computed * (slide.length - 1);
    for ( var i = 0; i < slide.length; i++){
        slide[i].style.width = computed + "px";
    }
    wrapper.style.width = computed * slide.length + "px";
    wrapper.style.right = right * -1 + "px";

    
    
    btnLeft.addEventListener("click", function(e){
        e.preventDefault();
        let content = document.querySelector(".content");
        let computed = content.clientWidth;
        let wrapperRight = parseInt(wrapper.style.right);
        let wrapperWidth = parseInt(wrapper.style.width);
        if (wrapperRight <= -wrapperWidth + computed){
            wrapper.style.right = 0 + "px";
            let right = wrapper.style.right/computed;
        } else{
            wrapper.style.right = wrapperRight - computed +"px";
            // console.log(wrapper.style.right);
        }
    });
    btnRight.addEventListener("click", function(e){
        e.preventDefault();
        let content = document.querySelector(".content");
        let computed = content.clientWidth;
        let wrapperRight = parseInt(wrapper.style.right);
        let wrapperWidth = parseInt(wrapper.style.width);
        if (wrapperRight >= 0){
            wrapper.style.right = -wrapperWidth + computed + "px";
            let right = wrapper.style.right/computed;
        } else{
            wrapper.style.right = wrapperRight + computed +"px";
            // console.log(wrapper.style.right);
        }
    });

    
    window.addEventListener('resize', function(){
    // let wrapperRight = document.querySelector(".wrapper-sleder");
    let content = document.querySelector(".content");
    let slide = document.querySelectorAll(".slide");
    let computed = content.clientWidth;
    for ( var i = 0; i < slide.length; i++){
        slide[i].style.width = computed + "px";
    }
    wrapper.style.width = computed * slide.length + "px";
    let wrapperRight = parseInt(wrapper.style.right);
    let right = Math.round(wrapperRight/computed);
    wrapper.style.right=right*computed+"px";
    // wrapper.style.right = computed * right;
    // console.log(right);
    // console.log(computed);
    });

    //reviews

    $(".review__text-btn").on("click", e =>{
        e.preventDefault();
        const $this = $(e.target);
        const rewievTitle = $this.prev('.review__text-title');
        const rewievAbout = $this.prev('.review__text-about');
        let overlay = $(".overlay");
        // let name = $this.siblings('review__text-title')[0].innerHTML;
        let about = $this.siblings('review__text-about');
        overlay.addClass("overlay-activ");
        body.classList.add("body-active");
        overlay.find(".overlay__name")[0].innerHTML = $this.siblings('.review__text-title')[0].innerHTML;
        overlay.find(".overlay__text")[0].innerHTML = $this.siblings('.review__text-about')[0].innerHTML;
        
    });

    $(".overlay").on("click", function (e){
        e.preventDefault();
        let name = e.target.className;
        let overlay = $(".overlay");
        if(name !== "overlay__block" && name !== "overlay__content" && name !=="overlay__name" && name !== "overlay__text"){
            overlay.removeClass("overlay-activ");
            body.classList.remove("body-active");
        }
        
    });




    //form

    const myForm = document.querySelector("#form");
    const sendButton = document.querySelector("#sendButton");

    sendButton.addEventListener("click", function(e){
        e.preventDefault();
        // console.log(myForm.elements.name.value);
        // console.log(myForm.elements.pay.value);
        if (validateForm(myForm)){
            const data = {
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                comment: myForm.elements.textarea.value,
                to: 'qwer@qwer.com'
            };

            // console.log(data);
            const xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                if(xhr.status >= 400) {
                    let overlay = $(".overlay");
                    overlay.addClass("overlay-activ");
                    body.classList.add("body-active");
                    overlay.find(".overlay__name")[0].innerHTML = "Произошла ошибка на сервере. Приносим свои извинения";
                }
                else{
                    let overlay = $(".overlay");
                    overlay.addClass("overlay-activ");
                    body.classList.add("body-active");
                    overlay.find(".overlay__name")[0].innerHTML = "Заказ принят!";
                    overlay.find(".overlay__text")[0].innerHTML = "";
                }
            });
        }
    });

    function validateForm(form){
        let valid = true;

        if (!validateField(form.elements.name)){
            valid = false;
        }

        if (!validateField(form.elements.phone)){
            valid = false;
        }

        // if (!validateField(form.elements.pay[1])){
        //     valid = false;
        // }

        return valid;
    }

    function validateField(field){
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

    //ymap

    ymaps.ready(maps);

    var placemark =[
        {
            latitude: 59.97,
            langitude: 30.31,
            hintContent: '<div class="map__hint">ул. Литералов, д. 19</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__balloon-pic" src="svg/icons/logo.svg" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литералов, д. 19',
                '</div>'
            ]
        },
        {
            latitude: 59.94,
            langitude: 30.25,
            hintContent: '<div class="map__hint">Малый проспект В О, д. 64</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__balloon-pic" src="svg/icons/logo.svg" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д. 64',
                '</div>'
            ]
        },
        {
            latitude: 59.93,
            langitude: 30.34,
            hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__balloon-pic" src="svg/icons/logo.svg" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
                '</div>'
            ]
        }
    ];
    function maps (){
        var map = new ymaps.Map('map',{
            center: [59.94, 30.32],
            zoom:12,
            controls:['zoomControl'],
            behaviors: ['drag']
        });
        placemark.forEach(function(obj){
            var placemark = new ymaps.Placemark([obj.latitude, obj.langitude],{
                hintContent: obj.hintContent,
                balloonContent: obj.balloonContent.join('')
            },{
                iconLayout: 'default#image',
                iconImageHref: 'svg/icons/map-marker.svg',
                iconImageSize: [47,57],
                iconImageOffset:[-23,-57]
            });
            map.geoObjects.add(placemark);
        });
    }
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