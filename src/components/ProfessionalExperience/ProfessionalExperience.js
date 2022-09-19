import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import Data from "./Data";

import "./ProfessionalExperience.scss";

const ProfessionalExperience = () => (
  <div className="professional-experiences">
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
  const { company, durations, roles } = title;
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
      <div className="roles">
        {roles.map((role, index) => (
          <div key={index} className="role">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceDesc = ({ descriptions }) => (
  <ul className="experience-desc">
    {descriptions.map((desc, descIndex) => (
      <React.Fragment key={descIndex}>
        <li className="row">
          <div className="main-line-project">{`${desc?.mainLine?.project}`}</div>
          <div className="main-line-stack">{`[${desc?.mainLine?.stack?.join(
            ", "
          )}]`}</div>
        </li>
        <ul>
          {desc.subLines?.map((line, lineIndex) => (
            <div key={lineIndex} className="row subline">
              <li>{line}</li>
            </div>
          ))}
        </ul>
      </React.Fragment>
    ))}
  </ul>
);
