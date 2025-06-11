import { loadLandingPage } from './landing-page';
import { loadMenuPage } from './menu-page';
import { loadAboutPage } from './about-page';

document.addEventListener('DOMContentLoaded', () => {
  loadLandingPage();

  document.getElementById('homeBtn').addEventListener('click', loadLandingPage);
  document.getElementById('menuBtn').addEventListener('click', loadMenuPage);
  document.getElementById('aboutBtn').addEventListener('click', loadAboutPage);
});
