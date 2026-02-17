const leftPane = document.querySelector('.left-pane');
const img = document.querySelector('.left-pane img');

leftPane.addEventListener('mousemove', (e) => {
    const { width, height } = leftPane.getBoundingClientRect();
    const xVal = (e.clientX / width) * 10 - 5; // Subtle move
    const yVal = (e.clientY / height) * 10 - 5;
    
    img.style.transform = `scale(1.1) translate(${xVal}px, ${yVal}px)`;
});

leftPane.addEventListener('mouseleave', () => {
    img.style.transform = `scale(1) translate(0, 0)`;
});

const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('load', () => {
    document.querySelector('.floating-name').style.opacity = '0';
    document.querySelector('.floating-name').style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        const name = document.querySelector('.floating-name');
        name.style.transition = "all 1s ease-out";
        name.style.opacity = '1';
        name.style.transform = 'translateX(0)';
    }, 300);
});