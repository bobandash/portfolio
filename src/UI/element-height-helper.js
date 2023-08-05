// IIFE to get the y where each section starts
const height = (() => {
  function getHeaderHeight(){
    const headerSection = document.querySelector('header');
    const headerheight = headerSection.getBoundingClientRect().height;
    return headerheight;
  }
  
  function getAboutSectionY(){
    const headerHeight = getHeaderHeight();
    const aboutSection = document.querySelector('.about');
    const aboutSectionY = window.scrollY + aboutSection.getBoundingClientRect().y - headerHeight;
    return aboutSectionY;
  } 

  // Contact section does not take up the whole view port, so the process for calculating the Y is different
  // TO-DO - contact doesn't go down to the bottom of the screen
  function getContactSectionY(){
    const contactSection = document.querySelector('.contact');
    const contactSectionY = contactSection.getBoundingClientRect().y + contactSection.getBoundingClientRect().height - window.innerHeight;
    return contactSectionY;
  }

  function getProjectSectionY(){
    const headerHeight = getHeaderHeight();
    const projectsSection = document.querySelector('.projects');
    const projectsSectionY = window.scrollY + projectsSection.getBoundingClientRect().y - headerHeight;
    return projectsSectionY;
  }

  return {getAboutSectionY, getContactSectionY, getProjectSectionY}
})();

export default height;