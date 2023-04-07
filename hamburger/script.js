// document.addEventListener('DOMContentLoaded', () => { //add this if script wasnt at bottom of body in html
    const btn = document.getElementById('btn');
    const nav = document.getElementById('nav');

    btn.addEventListener("click", () => {
        nav.classList.toggle('active');
        btn.classList.toggle('active');
    });
// })
