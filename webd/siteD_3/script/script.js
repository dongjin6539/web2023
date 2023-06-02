// 슬라이더 
let currentIndex = 0;
const sliderWrap = document.querySelector(".slider__wrap");
const sliderInner = document.querySelector(".slider__inner");
const slider = document.querySelectorAll(".slider");

let sliderClone = sliderInner.firstElementChild.cloneNode(true);

sliderInner.appendChild(sliderClone);

setInterval(function(){
    currentIndex++;
    sliderInner.style.transition = "all 0.6s";
    sliderInner.style.transform = "translateY(" + 400 * currentIndex + "px)";

    console.log(currentIndex);
    if(currentIndex === 3){
        setTimeout(function(){
            sliderInner.style.transition = "0s";
            sliderInner.style.transform = "translateY(0px)";
        }, 600);
        currentIndex = 0;
    }
}, 3000);

// 탭 메뉴
document.querySelector("#section .article h2 a span").addEventListener("click", function(){
    document.querySelector("#section .article .contents").style.display = "block";
    document.querySelector("#section .article .gallery").style.display = "none";
    document.querySelector("#section .article h2 a span").style.color = "#0a3d08";
    document.querySelector("#section .article h2 a em").style.color = "#21851e";
});
document.querySelector("#section .article h2 a em").addEventListener("click", function(){
    document.querySelector("#section .article .contents").style.display = "none";
    document.querySelector("#section .article .gallery").style.display = "block";
    document.querySelector("#section .article h2 a span").style.color = "#21851e";
    document.querySelector("#section .article h2 a em").style.color = "#0a3d08";
});

// 메뉴
// const menu = document.querySelectorAll("#header .nav > ul > li");

// menu.forEach(menu => {
//     menu.addEventListener("mouseover", function(){
//         document.querySelectorAll(".submenu").forEach(submenu => {
//             submenu.style.display = "flex";
//             submenu.classList.add("show");
//         })
//     });
//     menu.addEventListener("mouseout", function(){
//         document.querySelectorAll(".submenu").forEach(submenu => {
//             submenu.style.display = "none";
//             submenu.classList.remove("show");
//         })
//     });
// });
$(".nav > ul > li").mouseover(function(){
    $(".submenu").stop().slideDown();
});
$(".nav > ul > li").mouseout(function(){
    $(".submenu").stop().slideUp();
});

// 팝업창
document.querySelector(".link").addEventListener("click", function(){
    document.querySelector(".popup__view").style.display = "block";
});
document.querySelector(".popup-close").addEventListener("click", function(){
    document.querySelector(".popup__view").style.display = "none";
});