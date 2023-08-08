import {createTag, createContainer} from './html-helper'

class Project {
  constructor({name, subheader, summary, technologiesUsed, githubRepoURL, githubLiveRepoURL, imageToRepresentProject}){
    this.name = name;
    this.subheader = subheader;
    this.summary = summary;
    this.technologiesUsed = technologiesUsed;
    this.githubRepoURL = githubRepoURL;
    this.githubLiveRepoURL = githubLiveRepoURL;
    this.imageToRepresentProject = imageToRepresentProject;
  }

  renderDOM(){
    const projectsSection = document.querySelector('section.projects');

    const projectName = createTag('h3', this.name, ['project-name']);
    const projectSubheader = createTag('h4', this.subheader, ['project-subheader']);

    const projectImg = document.createElement('img');
    projectImg.setAttribute('src', this.imageToRepresentProject);
    const projectImageContainer = createContainer('div', ['project-image-container'], [projectImg]);

    const projectSummaryHeader = createTag('h4', 'Summary', ['project-summary-header']);

    const summary = createTag('p', this.summary);
    const technologies = createTag('p', `Technologies: ${this.technologiesUsed}`);
    const summaryContainer = createContainer('div', ['summary-text'], [summary, technologies]);
    
    const githubRepo = createTag('a', 'View Code');
    githubRepo.setAttribute('href', this.githubRepoURL);
    githubRepo.setAttribute('target','_blank');
    const githubLiveRepo = createTag('a', 'Live View');
    githubLiveRepo.setAttribute('href', this.githubLiveRepoURL);
    githubLiveRepo.setAttribute('target','_blank');
    
    const projectLinks = createContainer('div', ['project-links'], [githubRepo, githubLiveRepo]);
    const allProjectDetailsContainer = createContainer('div', ['project-details'], [projectSummaryHeader, summaryContainer, projectLinks]);
    
    const projectImageAndDetails = createContainer('div', ['project-image-and-details'], [projectImageContainer, allProjectDetailsContainer]);

    const projectDiv = createContainer('div', ['project'], [projectName, projectSubheader, projectImageAndDetails]);
    projectsSection.appendChild(projectDiv);

/*     projectsSection.innerHTML += `
    <div class="project">
      <h3 class = "project-name">${this.name}</h3>
      <h4 class = "project-subheader">${this.subheader}</h4>
      <div class="project-image-and-details">
        <div class = "project-image-container">
          <img src = ${this.imageToRepresentProject}>
        </div>
        <div class = "project-details">
          <h4 class = "project-summary-header">Summary</h4>
          <div class = "summary-text">
            <p>${this.summary}</p>
            <p>Technologies: ${this.technologiesUsed}</p>
          </div>
          <div class = "project-links">
            <a href = "${this.githubRepoURL}" target = "_blank">View Code</a>
            <a href = "${this.githubLiveRepoURL}" target = "_blank">Live Preview</a>
          </div> 
        </div>
      </div>
    </div>
    ` */
  }
}

export default Project;