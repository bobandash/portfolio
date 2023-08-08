import Project from './projects'
import weatherAppImage from '../assets/weather-app-image.png'
import toDoListImage from '../assets/to-do-image.png'
import battleshipImage from '../assets/battleship-project-image.png';

function renderProjects(){
  const project1 = new Project({
    name: 'Battleship',
    subheader: 'Classic Board Game',
    summary: 'This simple battleship web application used to practice Test Driven Development',
    technologiesUsed: 'HTML, CSS, Vanilla JS',
    githubRepoURL: 'https://github.com/bobandash/top_battleship',
    githubLiveRepoURL: 'https://bobandash.github.io/top_battleship/',
    imageToRepresentProject: battleshipImage,
  })

  const project2 = new Project({
    name: 'Weather App',
    subheader: 'My First API Call',
    summary: 'This weather app returns the  weather for the next week using an API call to WeatherAPI',
    technologiesUsed: 'HTML, CSS, Vanilla JS',
    githubRepoURL: 'https://github.com/bobandash/weather-app',
    githubLiveRepoURL: 'https://bobandash.github.io/weather-app/',
    imageToRepresentProject: weatherAppImage,
  })

  const project3 = new Project({
    name: 'To-Do List',
    subheader: 'My First Real Web App',
    summary: 'This to do list was modeled after todoist, and allows users to create, edit, and remove to-do tasks',
    technologiesUsed: 'HTML, CSS, Vanilla JS',
    githubRepoURL: "https://github.com/bobandash/todolist",
    githubLiveRepoURL: 'https://bobandash.github.io/todolist/',
    imageToRepresentProject: toDoListImage,    
  })

  project1.renderDOM();
  project2.renderDOM();
  project3.renderDOM();
}

export default renderProjects;