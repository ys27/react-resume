import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import Data from "./Data";

import "./RecentProjects.scss";

const RecentProjects = () => (
  <div className="recent-projects">
    <SectionTitle title="Recent Projects" />
    <div className="projects">
      {Data.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
);

export default RecentProjects;

const Project = ({ project }) => (
  <div>
    <div className="title">{project.title}</div>
    <div className="description">{project.desc}</div>
  </div>
);
