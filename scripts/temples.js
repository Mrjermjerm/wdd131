
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const nav = document.getElementById('navbar');

    
    hamburgerIcon.addEventListener('click', function () {
        nav.classList.toggle('visible'); 
        hamburgerIcon.classList.toggle('open'); 
    });

    
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();

    
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});