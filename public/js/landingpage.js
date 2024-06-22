document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line");
    const t1 = gsap.timeline();
    const lineTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 }); //infinite repeat

    let windowSize = window.innerWidth;
    setLineLength(lines);

    t1.to(
        ".landingpage > .landingpage-text-container",
        {
            opacity: 1,
            duration: 0.3,
            y: -20,
        },
        1
    );

    t1.to(
        "nav",
        {
            opacity: 1,
            top: "2rem",
            duration: 0.3,
        },
        1.3
    );

    t1.to(
        lines,
        {
            opacity: 1,
            stagger: 0.08,
            duration: 0.1,
            ease: "power2.in",
            onComplete: () => {
                lineTimeline.to(
                    lines,
                    {
                        opacity: 0,
                        stagger: 0.08,
                        duration: 0.5,
                        ease: "power3.in",
                    },
                    1
                );

                lineTimeline.to(
                    lines,
                    {
                        opacity: 1,
                        stagger: 0.08,
                        duration: 0.5,
                        ease: "power3.in",
                    },
                    1.5
                );
            },
        },
        1.15
    );

    lineTimeline.delay(1);
});

const setLineLength = (lines) => {
    let multiplyVariable = 1;
    let width = 100;
    lines.forEach((line) => {
        line.style.width = `${width * multiplyVariable}%`;
        multiplyVariable *= 0.6;
    });
};

const adjustHeadingBreak = (windowSize) => {
    if (windowSize > 800) {
        largeHeadingBreak();
    } else {
        smallHeadingBreak();
    }
};

const largeHeadingBreak = () => {
    let header = document.querySelector(".landingpage h1");
    let newHtml = "I CREATE THINGS ON THE WEB";
    // let newHtml = "SAMUEL SONG";
    header.innerHTML = newHtml;
};
const smallHeadingBreak = () => {
    let header = document.querySelector(".landingpage h1");
    let newHtml = 'I CREATE THINGS<br>ON THE <span class="gradient">WEB</span>';
    header.innerHTML = newHtml;
};
