import { loadLandingPage } from './landing-page';
import { loadMenuPage } from './menu-page';

loadLandingPage();

document.getElementById('menuBtn').addEventListener('click', loadMenuPage);
document.getElementById('homeBtn').addEventListener('click', loadLandingPage);
