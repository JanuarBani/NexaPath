// CSS imports
import '../styles/styles.css';

import App from './pages/app';
import { registerServiceWorker } from './utils';
import { generateNavLinksTemplate } from './templates';

document.addEventListener('DOMContentLoaded', async () => {
  // Render navbar links
  const mainNavbar = document.getElementById('main-navbar');
  const mobileLinks = document.getElementById('mobile-links');

  if (mobileLinks) mobileLinks.innerHTML = generateNavLinksTemplate(true);
  if (mainNavbar) mainNavbar.innerHTML = generateNavLinksTemplate(false);

  // Handle skip link and main content
  const content = document.querySelector('#main-content');
  const skipLinkButton = document.getElementById('skip-link');
  if (!content || !skipLinkButton) {
    if (!content) console.error("Elemen 'main-content' tidak ditemukan di DOM.");
    if (!skipLinkButton) console.error("Elemen 'skip-link' tidak ditemukan di DOM.");
    return;
  }

  // Drawer toggle
  const drawerButton = document.getElementById('drawer-button');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function closeDrawer() {
    drawer?.classList.add('-translate-x-full');
    drawerOverlay?.classList.add('hidden');
  }

  drawerButton?.addEventListener('click', () => {
    drawer?.classList.remove('-translate-x-full');
    drawerOverlay?.classList.remove('hidden');
  });

  drawerClose?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', closeDrawer);

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  function setThemeIcons(isDark) {
    if (!iconSun || !iconMoon) return;
    if (isDark) {
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    } else {
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    }
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    setThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    setThemeIcons(false);
  }

  themeToggle?.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setThemeIcons(isDark);
  });

  // Inisialisasi App
  const app = new App({ content, skipLinkButton });
  await registerServiceWorker();
  await app.renderPage();

  // On hashchange
  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  // Sticky header effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
});
