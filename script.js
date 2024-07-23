document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page has loaded');

    const images = document.querySelectorAll('.gallery img');

    images.forEach((img, index) => {
        img.addEventListener('focus', onFocus);
        img.addEventListener('blur', onBlur);
        img.addEventListener('mousemove', onMouseMove);

        // Add tabindex to make the image focusable
        img.setAttribute('tabindex', '0');
    });

    function onFocus(event) {
        event.target.classList.add('focused');
        console.log(`Image ${event.target.alt} is focused`);
    }

    function onBlur(event) {
        event.target.classList.remove('focused');
        console.log(`Image ${event.target.alt} is blurred`);
    }

    function onMouseMove(event) {
        console.log(`Mouse is moving over image: ${event.target.alt}`);
    }
});
