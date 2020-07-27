import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import Data from "./Data";

import "./ProfessionalExperience.scss";

const ProfessionalExperience = () => (
  <div className="professional-experience">
    <SectionTitle title="Professional Experience" />
    <div className="experiences">
      {Data.map((experience, index) => (
        <ExperienceSection key={index} experience={experience} />
      ))}
    </div>
  </div>
);

export default ProfessionalExperience;

const ExperienceSection = ({ experience }) => (
  <div className="experience-section">
    <ExperienceTitle title={experience.title} />
    <ExperienceDesc descriptions={experience.descriptions} />
  </div>
);

const ExperienceTitle = ({ title }) => {
  const { company, durations, role } = title;
  return (
    <div className="experience-title">
      <div className="company">{company}</div>
      <div className="durations">
        {durations.map((duration, index) => (
          <div key={index} className="duration">
            {duration}
          </div>
        ))}
      </div>
      <div className="role">{role}</div>
    </div>
  );
};

const ExperienceDesc = ({ descriptions }) => (
  <ul className="experience-desc">
    {descriptions.map((desc, descIndex) => (
      <React.Fragment key={descIndex}>
        <li className="row">
          <div className="desc-skills">{desc.mainLine[0]}</div>
          {desc.mainLine[1]}
        </li>
        {desc.subLines &&
          desc.subLines.map((line, lineIndex) => (
            <div key={lineIndex} className="row subline">
              <div className="desc-skills">{line[0]}</div>
              {line[1]}
            </div>
          ))}
      </React.Fragment>
    ))}
  </ul>
);
