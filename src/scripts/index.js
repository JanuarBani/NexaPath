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
    return; // Stop if essentials not found
  }

  // Drawer toggle elements
  const drawerButton = document.getElementById('drawer-button');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function closeDrawer() {
    if (drawer) drawer.classList.add('-translate-x-full');
    if (drawerOverlay) drawerOverlay.classList.add('hidden');
  }

  drawerButton?.addEventListener('click', () => {
    if (drawer) drawer.classList.remove('-translate-x-full');
    if (drawerOverlay) drawerOverlay.classList.remove('hidden');
  });

  drawerClose?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', closeDrawer);

  // Theme toggle setup
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

  // Initialize App
  const app = new App({ content, skipLinkButton });
  await registerServiceWorker();
  await app.renderPage();

  // Render page on hash change
  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  // Sticky header effect on scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
});

// Scroll animation using Intersection Observer
export function setupScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll('[data-animate="slide-up"]:not(.animate-slide-up)').forEach((el) => {
    observer.observe(el);
  });

  return observer; // kembalikan observer agar bisa disconnect nanti
}
