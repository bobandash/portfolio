import height from './element-height-helper'

// Desktop header includes learn more about me section
const desktopHeader = (() => {
  function unhighlightAllNavItems(){
    const navItems = Array.from(document.querySelectorAll('.nav-elements ul li'));
    navItems.forEach(navItem => {
      navItem.classList.remove('highlight');
    })
  }

  function highlightHeaderName(element){
    element.classList.add('highlight');
  }

  // changes the color of the header to specific section scrolled on
  function highlightHeaderNameAtSpecificSection(){
    const scrollMarginTop = 100;
    const aboutNavItem = document.querySelector('li[data-nav-about]');
    const projectNavItem = document.querySelector('li[data-nav-project]');
    const contactNavitem = document.querySelector('li[data-nav-contact]')

    const contactSectionY = height.getContactSectionY() - scrollMarginTop;
    const projectSectionY = height.getProjectSectionY() - scrollMarginTop;
    const aboutSectionY  = height.getAboutSectionY() - scrollMarginTop;
    console.log(contactSectionY);
    document.addEventListener("scroll", () => {
      const lastKnownScrollPostion = window.scrollY;
      unhighlightAllNavItems();
      if(lastKnownScrollPostion > contactSectionY) {
        highlightHeaderName(contactNavitem);
      } else if (lastKnownScrollPostion > projectSectionY) {
        highlightHeaderName(projectNavItem);
      } else if (lastKnownScrollPostion > aboutSectionY) {
        highlightHeaderName(aboutNavItem);
      }
    })
  }

  function clickHeaderAndRedirect(){
    const topLeftLogo = document.querySelector('.portfolio-logo');
    const aboutNavItem = document.querySelector('li[data-nav-about]');
    const projectNavItem = document.querySelector('li[data-nav-project]');
    const contactNavitem = document.querySelector('li[data-nav-contact]')

    const aboutSection = document.querySelector('section.about');
    const contactSection = document.querySelector('section.contact');
    const projectSection = document.querySelector('section.projects');


    topLeftLogo.addEventListener('click', () => {
      unhighlightAllNavItems();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    })

    aboutNavItem.addEventListener('click', () => {
      unhighlightAllNavItems();
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        alignToTop: false,
      })
      if(!aboutNavItem.classList.contains('highlight')){
        aboutNavItem.classList.add('highlight');
      }
    })

    projectNavItem.addEventListener('click', () => {
      unhighlightAllNavItems();
      projectSection.scrollIntoView({
        behavior: 'smooth',
        alignToTop: false,
      })
      if(!projectNavItem.classList.contains('highlight')){
        projectNavItem.classList.add('highlight');
      }
    })

    contactNavitem.addEventListener('click', () => {
      unhighlightAllNavItems();
      contactSection.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      })
      if(!contactNavitem.classList.contains('highlight')){
        contactNavitem.classList.add('highlight');
      }
    })
  }
  
  function addLearnAboutMeButtonRedirect(){
    const learnAboutMeButton = document.querySelector('.learn-about-me > button');
    learnAboutMeButton.addEventListener('click', () => {
      const aboutSection = document.querySelector('section.about');
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        alignToTop: false,
      })
    })
  }


  function addAllFunctionality(){
    highlightHeaderNameAtSpecificSection();
    clickHeaderAndRedirect();
    addLearnAboutMeButtonRedirect();
  }

  return {addAllFunctionality}
})();

export default desktopHeader;