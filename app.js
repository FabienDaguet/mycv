"use-strict";

const progress = document.querySelectorAll(".progress_bar");
let pro = document.querySelector(".pro-title");
let comp = document.querySelector(".comp-title");
let body = document.querySelector(".body");


    console.log(pro.getBoundingClientRect().top);
    console.log(comp.getBoundingClientRect().top);

function scrollAnimation() {

    if (pro.getBoundingClientRect().top > 585) {
        body.style.background = "url(img/backpic.jpg) no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    } else if (pro.getBoundingClientRect().top <= 585 && pro.getBoundingClientRect().top >= 65.375) {

        body.style.background = "url(img/cerces.jpg) no-repeat center center fixed";
        body.style.backgroundSize = "cover";
        body.style.transitionDuration = "0.5s"
    } 

    for (let element of progress) {
        setTimeout(
            function() {
                if (comp.getBoundingClientRect().top < 596.5625) {

                    element.style.width = element.getAttribute("data-done") + "%";
                    element.style.opacity = 1;
                    body.style.background = "url(img/code.jpg) no-repeat center center fixed";
                    body.style.backgroundSize = "cover";
                } 
            }, 1000
        );
    }
}


window.addEventListener("scroll", scrollAnimation);




    




