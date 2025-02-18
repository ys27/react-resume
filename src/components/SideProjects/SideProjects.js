import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import Data from './Data';

import './SideProjects.scss';

const SideProjects = () => (
  <>
    <div className="side-projects">
      <SectionTitle title="Side Projects" />
      <div className="projects">
        {Data.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
    {/* <div className="more-projects">
      and more on <a href="https://github.com/ys27">GitHub</a>
    </div> */}
  </>
);

export default SideProjects;

const Project = ({ project }) => (
  <div className="project">
    <div className="title">
      <a href={project?.url} target="_blank" rel="noopener noreferrer">
        {project?.title}
      </a>
      <div className="desc-skills">{`[${project?.stack?.join(', ')}]`}</div>
    </div>
    <ul>
      {project?.desc.map((desc) => (
        <li key={desc} className="description">
          {desc}
        </li>
      ))}
    </ul>
  </div>
);
