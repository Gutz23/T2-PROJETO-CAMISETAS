document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', () => {
        sidebarMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        sidebarMenu.classList.remove('open');
    });

    document.addEventListener('click', (event) => {
        if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebarMenu.classList.remove('open');
        }
    });
});