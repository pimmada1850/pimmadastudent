// navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// scroll Reveal
const sr = ScrollRevael ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});
sr.reveal('.หน้าหลัก-text, .หน้าหลัก-img, .ผ้าอ้อมสำเร็จรูป-text, .ผ้าอ้อมสำเร็จรูป-img, .box, .s-box, .นมผงและนมกล่อง-text, .นมผงและนมกล่อง-img, .btn, .ช่องทางการติดต่อ-box', { interval: 200 });