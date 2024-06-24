document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((project) => {
        project.addEventListener("mouseover", () => {
            const title = project.querySelector(".project-information > h3");

            gsap.to(project, {
                y: -10,
                ease: "none",
                duration: 0.1,
            });

            gsap.to(title, {
                color: "#afbda1",
                ease: "none",
                duration: 0.1,
            });
        });

        project.addEventListener("mouseleave", () => {
            const title = project.querySelector(".project-information > h3");

            gsap.to(project, {
                y: 0,
                duration: 0.1,
            });

            gsap.to(title, {
                color: "#131313",
                duration: 0.1,
            });
        });
    });
});
