import projectGraphion from './assets/project-graphion.png'
import projectImg1 from './assets/project-1.png';
import projectImg2 from './assets/project-2.png';
import projectImg3 from './assets/project-3.png';
import projectImg4 from './assets/project-4.png';
import projectImg5 from './assets/project-5.png';

import reactLogo from './assets/react.svg'
import './App.css'
const projectList = [
      {
        id: 1001,
        name: 'Graphion Agency',
        desc: 'The official graphion company website that I created, It is made using React, react-router, vite and deployed on vercel',
        link: 'https://graphion-web.vercel.app/',
        image: projectGraphion
    },
    {
        id: 1002,
        name: 'Tsunami De Innovación',
        desc: 'The first website that I ever created, nothing special but has emotional importance to me. This marks the start of my web development Journey',
        link: 'https://itzzzlucifer.github.io/Prototype-1/',
        image: projectImg1
    },
    {
        id: 1003,
        name: 'The Montra',
        desc: 'The first website that I ever created, nothing special but has emotional importance to me. This marks the start of my web development Journey',
        link: 'https://itzzzlucifer.github.io/The-Montra/',
        image: projectImg2
    },
    {
        id: 1004,
        name: 'First Portfolio',
        desc: 'The first website that I ever created, nothing special but has emotional importance to me. This marks the start of my web development Journey',
        link: 'https://itzzzlucifer.github.io/portfolio/',
        image: projectImg3
    },
    {
        id: 1005,
        name: 'QR Code Component',
        desc: 'The first website that I ever created, nothing special but has emotional importance to me. This marks the start of my web development Journey',
        link: 'https://itzzzlucifer.github.io/QR-Code-Component/',
        image: projectImg4
    },
    {
        id: 1006,
        name: 'Product Preview Card',
        desc: 'The first website that I ever created, nothing special but has emotional importance to me. This marks the start of my web development Journey',
        link: 'https://itzzzlucifer.github.io/product-preview/',
        image: projectImg5
    }
]
function Projects() {
    return (
      <ul className="project-list-container" type='none'>
        {projectList.map((project) => (
          <a key={project.id} href={project.link} target='_blank'>
          <li key={project.id} className="project-item">
            <div className="project-image">
              <img
                src={project.image}
                alt={`Project-${project.id}-image`}
                /*onError={(event) => {
                  event.target.src = {reactLogo}; // Set placeholder image
                }}*/
              />
            </div>
            <div className="project-info">
              <span className="project-title">
                {project.id-1000}. {project.name}
              </span>
              <div className="project-desc">
                <span className='project-tags-container'>
                  <span className="project-tags">Html</span>
                  <span className="project-tags">Css</span>
                  <span className="project-tags">Js</span>
                </span>
                <span>{project.desc}</span>
              </div>
            </div>
          </li>
          </a>
        ))}
      </ul>
    );
  }
  
  export default Projects;
  