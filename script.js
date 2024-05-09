// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.innerText = 'Menu';
    menuToggle.style.backgroundColor = '#282828';
    menuToggle.style.color = '#a259ff';
    menuToggle.style.padding = '10px';
    menuToggle.style.border = 'none';
    menuToggle.style.display = 'none'; // Hidden by default, shown in mobile view

    const nav = document.querySelector('nav');
    nav.prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        const navLinks = nav.querySelectorAll('ul');
        navLinks.forEach(link => {
            link.style.display = link.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Adjust menu visibility based on viewport width
    function adjustMenu() {
        if (window.innerWidth < 768) {
            menuToggle.style.display = 'block';
            document.querySelectorAll('nav ul').forEach(ul => {
                ul.style.display = 'none'; // Hide on small screens
            });
        } else {
            menuToggle.style.display = 'none';
            document.querySelectorAll('nav ul').forEach(ul => {
                ul.style.display = 'block'; // Show on larger screens
            });
        }
    }

    window.addEventListener('resize', adjustMenu);
    adjustMenu();
});
