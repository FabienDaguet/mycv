"use-strict";

const progress = document.querySelectorAll(".progress-js");
let pro = document.querySelector(".pro-js");
let comp = document.querySelector(".comp-js");
let background = document.querySelector(".background-js");


    //console.log(pro.getBoundingClientRect().top);
    //console.log(comp.getBoundingClientRect().top);

function scrollAnimation() {

    for (let element of progress) {
            
        if (comp.getBoundingClientRect().top < 596.5625) {
            element.style.width = element.getAttribute("data-done") + "%";
            element.style.opacity = 1;
        } 
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
        if (pro.getBoundingClientRect().top > 585) {
            background.style.background = "url(img/backpic.jpg) no-repeat center center fixed";
            background.style.backgroundSize = "cover";
        } else if (pro.getBoundingClientRect().top <= 585 && pro.getBoundingClientRect().top >= 65.375) {

            background.style.background = "url(img/cerces.jpg) no-repeat center center fixed";
            background.style.backgroundSize = "cover";
            background.style.transitionDuration = "0.5s"
        } else if (comp.getBoundingClientRect().top < 596.5625) {

            background.style.background = "url(img/code.jpg) no-repeat center center fixed";
            background.style.backgroundSize = "cover";
        }
    } else {
        background.style.backgroundColor = "black";
    }
}


window.addEventListener("scroll", scrollAnimation); 