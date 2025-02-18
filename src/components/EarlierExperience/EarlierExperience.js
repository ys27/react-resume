import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import Data from './Data';

import './EarlierExperience.scss';
import '../ProfessionalExperience/ProfessionalExperience.scss';

const EarlierExperience = () => (
  <div className="earlier-experience">
    <SectionTitle title="Earlier Experience" />
    <div className="experiences">
      {Data.map((experience, index) => (
        <EarlierExperienceCard key={index} title={experience.title} />
      ))}
    </div>
  </div>
);

export default EarlierExperience;

const EarlierExperienceCard = ({ title }) => {
  const { company, durations, role } = title;
  return (
    <div className="earlier-experience-card">
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
