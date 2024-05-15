document.addEventListener("DOMContentLoaded", () => {

    const headingText = document.querySelectorAll('h1');
    const cursor = document.querySelector('.cursor');

    headingText.forEach((h1) => {
        h1.addEventListener('mouseenter', () => {
            cursor.style.opacity = 1;
            document.body.style.cursor = 'none';

            cursor.classList.add('scaled')
        })

        h1.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0;
            document.body.style.cursor = 'auto';

            cursor.classList.remove('scaled')
        })
    })

    document.addEventListener('mousemove', (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        
        cursor.style.left = `${mouseX}px`
        cursor.style.top = `${mouseY}px`
    })
})