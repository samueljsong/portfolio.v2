document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutme",
            start: "top top",
            end: "bottom bottom",
            pin: ".aboutme-content",
            scrub: 1,
            markers: false,
        },
    });

    let t2 = gsap.timeline();

    t2.to(".introduction", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".introduction",
            start: "top center",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    t1.to(".techstack-text h1", {
        opacity: 1,
        y: -30,
        stagger: 0.3,
        duration: 1,
    });
});
