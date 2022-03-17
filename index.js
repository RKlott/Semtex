const titreSpan = document.querySelectorAll("h1 span");
const titreh2Span = document.querySelectorAll("h2 span");
const btns = document.querySelectorAll(".first-btn");
const logo = document.querySelector(".logo");

const medias = document.querySelectorAll(".bulle");
const languagesMedias = document.querySelectorAll(".firstbulle");

window.addEventListener("load", () => {
    const TL = gsap.timeline({ paused: true });

    TL
        .staggerFrom(titreSpan, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.2)
        .staggerFrom(titreh2Span, 1, { top: -50, opacity: 0, ease: "sine.in" }, 0.2)
        .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=2")
        .staggerFrom(languagesMedias, 1, { opacity: 0, ease: "elastic.in" }, 0.3, "-=2")


        // .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
        .staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.2, "-=2")


    TL.play();
})
