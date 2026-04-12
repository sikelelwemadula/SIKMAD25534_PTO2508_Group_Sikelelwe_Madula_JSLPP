/**
 * Manages the sidebar UI component, including showing/hiding and updating content.
 * Interacts with local storage to persist sidebar state.
 * Provides functions to toggle visibility and update the sidebar items.
 * Handles user interactions with the sidebar.
 */
export function setupSidebar() {
    const sidebar = document.querySelector('.side-bar');
    const hideBtn = document.getElementById('hide-sidebar-btn');
    const showBtn = document.getElementById('show-sidebar-btn');
    const layout = document.getElementById('layout');
    const mobileLogo = document.querySelector('.logo-mobile');
    const overlay = document.querySelector('#sidebar-overlay');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    if (!sidebar || !layout) return;

    const savedState = localStorage.getItem('sidebarState');
    const savedTheme = localStorage.getItem('theme') || 'light';

    function hideSidebar() {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('show-sidebar');
        layout.classList.remove('with-sidebar');

        // Hide overlay on mobile/tablet
        if (window.innerWidth <= 1023 && overlay) {
            overlay.classList.remove('active');
            body.style.overflow = 'auto';
            if (showBtn) showBtn.style.display = 'block';
        } else if (showBtn) {
            showBtn.style.display = 'block';
        }

        localStorage.setItem('sidebarState', 'hidden');
    }

    function showSidebar() {
        sidebar.classList.remove('hidden');
        if (showBtn) showBtn.style.display = 'none';

        if (window.innerWidth <= 1023 && overlay) {
            sidebar.classList.add('show-sidebar');
            overlay.classList.add('active');
            body.style.overflow = 'hidden';
        } else {
            layout.classList.add('with-sidebar');
        }

        localStorage.setItem('sidebarState', 'visible');
    }

    function toggleSidebarMobile() {
        if (sidebar.classList.contains('show-sidebar')) {
            hideSidebar();
        } else {
            showSidebar();
        }
    }

    function closeSidebarOnOverlayClick() {
        hideSidebar();
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(nextTheme);
    }

    applyTheme(savedTheme);

    if (showBtn) showBtn.style.display = 'none';

    if (savedState === 'hidden') {
        hideSidebar();
    } else {
        showSidebar();
    }

    if (hideBtn) hideBtn.addEventListener('click', hideSidebar);
    if (showBtn) showBtn.addEventListener('click', showSidebar);
    if (mobileLogo) mobileLogo.addEventListener('click', toggleSidebarMobile);
    if (overlay) overlay.addEventListener('click', closeSidebarOnOverlayClick);
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023) {
            if (overlay) overlay.classList.remove('active');
            body.style.overflow = 'auto';
            if (sidebar.classList.contains('hidden')) {
                if (showBtn) showBtn.style.display = 'block';
            } else {
                layout.classList.add('with-sidebar');
                if (showBtn) showBtn.style.display = 'none';
            }
            sidebar.classList.remove('show-sidebar');
        } else {
            layout.classList.remove('with-sidebar');
            if (showBtn) showBtn.style.display = 'none';
            if (!sidebar.classList.contains('hidden')) {
                sidebar.classList.add('show-sidebar');
                if (overlay) overlay.classList.add('active');
            }
        }
    });
}
