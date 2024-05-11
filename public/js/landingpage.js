document.addEventListener("DOMContentLoaded", () => {
    let windowSize = window.innerWidth;
    adjustHeadingBreak(windowSize);
    
    window.addEventListener('resize', () => {
        windowSize = window.innerWidth;
        console.log(windowSize)
        adjustHeadingBreak(windowSize);
    })

    const t1 = gsap.timeline()

    const textArray = document.querySelectorAll('.landingpage > h1 > span');

    t1.from(textArray, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
    })
    
    
})

const adjustHeadingBreak = (windowSize) => {
    if(windowSize > 800){
        largeHeadingBreak();
    } else {
        smallHeadingBreak();
    }
}

const largeHeadingBreak = () => {
    let header = document.querySelector('.landingpage h1');
    let newHtml = '<span>A</span> <span>passionate</span> <span>dev</span> <span>making</span><br><span class="gradient">things</span> <span>on</span> <span>the</span> <span>web.</span>';
    header.innerHTML = newHtml;
}

const smallHeadingBreak = () => {
    let header = document.querySelector('.landingpage h1');
    let newHtml = '<span>A</span> <span>passionate</span> <span>dev</span><br><span>making</span> <span class="gradient">things</span><br><span>on</span> <span>the</span> <span>web.</span>'
    header.innerHTML = newHtml;
}