document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((project) => {
        const title = project.querySelector(".project-information > h3");
        const techs = project.querySelectorAll(".project-techstack > div");
        project.addEventListener("mouseover", () => {
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

            gsap.to(
                techs,
                {
                    color: "#afbda1",
                    duration: 0.1,
                },
                0
            );
        });

        project.addEventListener("mouseleave", () => {
            gsap.to(project, {
                y: 0,
                duration: 0.1,
            });

            gsap.to(title, {
                color: "#131313",
                duration: 0.1,
            });

            gsap.to(
                techs,
                {
                    color: "#45624e",
                    duration: 0.1,
                },
                0
            );
        });
    });
});
