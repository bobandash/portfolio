import height from './element-height-helper'

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

    const aboutNavItem = document.querySelector('li[data-nav-about]');
    const projectNavItem = document.querySelector('li[data-nav-project]');
    const contactNavitem = document.querySelector('li[data-nav-contact]')

    const contactSectionY = height.getContactSectionY();
    const projectSectionY = height.getProjectSectionY();
    const aboutSectionY  = height.getAboutSectionY();
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

    const contactSectionY = height.getContactSectionY();
    const projectSectionY = height.getProjectSectionY();
    const aboutSectionY  = height.getAboutSectionY();

    topLeftLogo.addEventListener('click', () => {
      unhighlightAllNavItems();
      window.scrollTo(0, 0);
    })

    aboutNavItem.addEventListener('click', () => {
      unhighlightAllNavItems();
      window.scrollTo(0, aboutSectionY + 1);
      if(!aboutNavItem.classList.contains('highlight')){
        aboutNavItem.classList.add('highlight');
      }
    })

    projectNavItem.addEventListener('click', () => {
      unhighlightAllNavItems();
      window.scrollTo(0, projectSectionY + 1);
      if(!projectNavItem.classList.contains('highlight')){
        projectNavItem.classList.add('highlight');
      }
    })

    contactNavitem.addEventListener('click', () => {
      unhighlightAllNavItems();
      window.scrollTo(0, contactSectionY + 1);
      if(!contactNavitem.classList.contains('highlight')){
        contactNavitem.classList.add('highlight');
      }
    })
   } 


  function addAllFunctionality(){
    highlightHeaderNameAtSpecificSection();
    clickHeaderAndRedirect();
  }

  return {addAllFunctionality}
})();

export default desktopHeader;