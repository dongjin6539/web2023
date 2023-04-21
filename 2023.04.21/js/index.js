const bannerWrap = document.querySelector(".banner__wrap");
const bannerImg = bannerWrap.querySelector(".banner__image");  
const bannerInner = bannerWrap.querySelector(".banner__inner"); 
const banner = bannerWrap.querySelectorAll(".banner");    

let currentIndex = 0;
let bannerCount = banner.length;
let bannerInterval = 2000;
let bannerHeight = banner[0].offsetHeight; 

function bannerEffect(){
    currentIndex++;

    bannerInner.style.transition = "all 0.6s";
    bannerInner.style.transform = "translateY("+ bannerHeight * currentIndex + "px)";

    console.log(currentIndex);

    if (currentIndex == 2){
        currentIndex = -1;
    }
};

setInterval(bannerEffect, bannerInterval);
