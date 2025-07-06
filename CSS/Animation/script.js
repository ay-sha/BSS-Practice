// Toggle Button
const toggle = document.querySelector('.mobile-menu-toggle');
const btn = document.querySelector('#btn2');
const container = document.querySelector('.container3')
// btn.addEventListener('click', function () {
//     container.classList.toggle('dark');
// });

// Hamburger
const mobileMenu = document.querySelector('.mobile-menu-items');
if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    });
}