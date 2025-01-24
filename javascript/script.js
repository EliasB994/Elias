const title = document.getElementById('title');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // Adjust parallax intensity
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    title.style.transform = `translate(${x}px, ${y}px)`;
});
