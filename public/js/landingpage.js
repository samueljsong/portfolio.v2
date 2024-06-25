/**
 * Splits text elements and makes a span element for each letter.
 * @param {*} selector
 */
function splitTextIntoSpans(selector) {
    let element = document.querySelector(selector);
    if (element) {
        let text = element.innerText;
        let splitText = text
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

const setLineLength = (lines) => {
    let multiplyVariable = 1;
    let width = 100;
    lines.forEach((line) => {
        line.style.width = `${width * multiplyVariable}%`;
        multiplyVariable *= 0.6;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // Gsap constants
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();

    splitTextIntoSpans(".landing-title");
    splitTextIntoSpans(".info-text-container");

    let letters = document.querySelectorAll(".landing-title > span");
    let infoLetters = document.querySelectorAll(".info-text-container > span");
    let nav = document.querySelector("nav");

    t1.from(
        letters,
        {
            y: 600,
            ease: "power3.inOut",
            stagger: 0.075,
            delay: 0.2,
            duration: 1.5,
        },
        0.25
    );

    t1.from(
        infoLetters,
        {
            y: 30,
            ease: "power3.inOut",
            duration: 1,
        },
        1.75
    );

    t1.from(
        ".landing-btn",
        {
            y: 30,
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            pointerEvents: "none",
        },
        1.75
    );

    t1.from(
        ".copyright",
        {
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
        },
        1.75
    );

    t1.to(
        nav,
        {
            opacity: 1,
            marginTop: "2rem",
            ease: "power3.out",
            duration: 1,
        },
        2.15
    );

    t1.eventCallback("onComplete", () => {
        const scrollTimeline = gsap.timeline({ repeat: -1, delay: 0 });

        scrollTimeline.to(".landing-btn", {
            y: 20,
            ease: "power3.inOut",
            duration: 1,
        });

        scrollTimeline.to(
            ".landing-btn",
            {
                y: 0,
                ease: "power3.inOut",
                duration: 1,
            },
            1
        );
    });
});
