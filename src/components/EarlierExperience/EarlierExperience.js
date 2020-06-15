import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import { ExperienceTitle } from "../ProfessionalExperience/ProfessionalExperience";
import Data from "./Data";

import "./EarlierExperience.scss";
import "../ProfessionalExperience/ProfessionalExperience.scss";

const EarlierExperience = () => (
  <div className="earlier-experience">
    <SectionTitle title="Earlier Experience" />
    <div className="experiences">
      {Data.map((experience) => (
        <ExperienceTitle title={experience.title} />
      ))}
    </div>
  </div>
);

export default EarlierExperience;
