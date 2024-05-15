gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded" , () => {
    const t1 = gsap.timeline();
    const gotopTimeline = gsap.timeline({repeat: -1, repeatDelay: 0.3});
    const toTopButton = document.querySelector('.totop')
    toTopButton.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo: {y:0}})
    })

    t1.to('.contact-info', {
        opacity: 1,
        scrollTrigger : {
            trigger: '.contact',
            start : 'top center',
            end: 'bottom bottom',
            scrub: 1,
        }
    })

    gotopTimeline.to('.totop', {
        y: -20,
        duration: 1,
        ease: 'power3.inOut'
    })

    gotopTimeline.to('.totop', {
        y: 0,
        duration: 1,
        ease: 'power3.inOut'
    }, 1)

    

})