import styles from './styles.css';
import animationStyles from './animations.css'
import '@fortawesome/fontawesome-free'
import "@fortawesome/fontawesome-free/css/all.min.css";
import html from '../index.html'
import desktopHeader from './UI/header-desktop';
import mobileHeader from './UI/header-mobile'
import animation from './UI/animations'
import renderProjects from './UI/projects-dom.js'

renderAllUI();


function renderAllUI(){
  desktopHeader.addAllFunctionality();
  mobileHeader.addAllFunctionality();
  renderProjects();
}