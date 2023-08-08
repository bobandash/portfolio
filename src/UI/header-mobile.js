import height from './element-height-helper'

const mobileHeader = (() => {
  function addHamburgerMenuFunctionality(){
    const hamburgerMenu = document.querySelector('.hamburger-menu > i');
    hamburgerMenu.addEventListener('click', () => {
      const sidebar = document.querySelector('aside');
      sidebar.classList.toggle('hidden');
      if(!sidebar.classList.contains('hidden')){

      }
    })
  }


  function hideSidebar(){
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('hidden');
  }

  function addRemoveSideBarFunctionality(){
    const hideSidebarBtn = document.querySelector('.hide-sidebar');
    hideSidebarBtn.addEventListener('click', hideSidebar)
  }

  function addSidebarNavFunctionality(){
    const aboutNav = document.querySelector('li[data-mobile-nav-about]');
    const projectNav = document.querySelector('li[data-mobile-nav-projects]');
    const contactNav = document.querySelector('li[data-mobile-nav-contact]');

    aboutNav.addEventListener('click', () => {
      const aboutSectionY = height.getAboutSectionY();
      window.scrollTo(0, aboutSectionY);
      hideSidebar();
    })

    projectNav.addEventListener('click', () => {
      const projectSectionY = height.getProjectSectionY();
      window.scrollTo(0, projectSectionY);
      hideSidebar();
    })

    contactNav.addEventListener('click', () => {
      const contactSectionY = height.getContactSectionY();
      window.scrollTo(0, contactSectionY);
      hideSidebar();
    })
  }

  function addAllFunctionality(){
    addHamburgerMenuFunctionality();
    addRemoveSideBarFunctionality();
    addSidebarNavFunctionality();
  }

  return {addAllFunctionality};
})();

export default mobileHeader;