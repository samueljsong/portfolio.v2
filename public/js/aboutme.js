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

    t1.to(".aboutme-content > h1", {
        y: -500,
        opacity: 0,
        duration: 1,
    });

    t1.to(".techstack-text h1", {
        opacity: 1,
        y: -30,
        stagger: 0.3,
        duration: 1,
    });
});
