document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline();

    t1.to('.aboutme > h1', {
        opacity: 1,
        y: -30,
        scrollTrigger : {
            trigger: '.aboutme',
            start : 'top center',
            end: 'bottom bottom',
            scrub: 1,
        }
    })

})