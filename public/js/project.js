document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project",
            start: "top top",
            end: "bottom bottom",
            pin: ".slider",
            scrub: 1,
            markers: false,
        },
    });
    const project = document.querySelectorAll(".project-card");

    console.log(project);

    t1.from(".flaker-card", {
        x: 200,
        opacity: 0,
    });

    t1.to(".flaker-card", {
        opacity: 1,
    });

    t1.to(".flaker-card", {
        x: -200,
        opacity: 0,
    });

    t1.from(".greenbanana-card", {
        x: 200,
        opacity: 0,
    });

    t1.to(".greenbanana-card", {
        opacity: 1,
    });

    t1.to(".greenbanana-card", {
        x: -200,
        opacity: 0,
    });

    t1.from(".portfolio-card", {
        x: 200,
        opacity: 0,
    });

    t1.to(".portfolio-card", {
        opacity: 1,
    });

    t1.to(".portfolio-card", {
        x: -200,
        opacity: 0,
    });

    // t1.to(project, {
    //     x: 100,
    //     opacity: 0,
    //     stagger: 1,
    // });
});
