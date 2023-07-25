const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let sections = gsap.utils.toArray(".section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        pinSpacing: 1,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: document.querySelector(".horizontal").offsetWidth,
        // end: "+=5000"
        invalidateOnRefresh: true,
        anticipatePin: 1
    },
});

// let sections2 = gsap.utils.toArray(".section2");

// gsap.to(sections2, {
//     xPercent: -100 * (sections2.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".horizontal2",
//         pin: true,
//         scrub: 1,
//         // snap: 1 / (sections2.length - 1),
//         end: document.querySelector(".horizontal2").offsetWidth,
//         // end: "+=5000"
//     },
// });

window.addEventListener("DOMContentLoaded", () => {
    const parentElement = document.querySelector(".site__coding");
    const h2Element = document.createElement("h2");
    h2Element.textContent = " site coding ";

    parentElement.appendChild(h2Element);
});

gsap.to(".intro", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".intro",
        containerAnimation: scrollTween,
        start: "left center",
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});

gsap.to(".intro_bg", {
    opacity: 1,
    duration: 5,
    scrollTrigger: {
        trigger: ".intro",
        containerAnimation: scrollTween,
        start: "60% 20%",
        pin: true,
        pinSpacing: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});

// gsap.to(".title div", {
//     opacity: 1,
//     x: 0,
//     duration: 5,
//     scrollTrigger: {
//         trigger: ".title",
//         containerAnimation: scrollTween,
//         start: "left left",
//         pin: true,
//         pinSpacing: 1,
//         invalidateOnRefresh: true,
//         anticipatePin: 1
//     }
// });