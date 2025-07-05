// const btn = document.querySelector('#btn2');
//     const container = document.querySelector('.container3')
//     btn.addEventListener('click', function () {
//         container.classList.toggle('dark');
//     });

const toggle = document.querySelector('.mobile-menu-toggle');
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