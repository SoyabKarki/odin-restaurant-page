import { loadLandingPage } from './landing-page';
import { loadMenuPage } from './menu-page';
import { loadAboutPage } from './about-page';

function setActiveTab(clickedId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.id === clickedId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadLandingPage();
  setActiveTab('homeBtn');

  document.getElementById('homeBtn').addEventListener('click', () => {
    loadLandingPage();
    setActiveTab('homeBtn');
  });

  document.getElementById('menuBtn').addEventListener('click', () => {
    loadMenuPage();
    setActiveTab('menuBtn');
  });

  document.getElementById('aboutBtn').addEventListener('click', () => {
    loadAboutPage();
    setActiveTab('aboutBtn');
  });
});
