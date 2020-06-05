import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import { ExperienceTitle } from "../ProfessionalExperience/ProfessionalExperience";

import "./EarlierExperience.scss";
import "../ProfessionalExperience/ProfessionalExperience.scss";

const EarlierExperience = () => (
  <div className="earlier-experience">
    <SectionTitle title="Earlier Experience" />
    <div className="experiences">
      <ExperienceTitle
        title={{
          company: "Gov't of Ontario",
          durations: ["May 2015 - Aug 2015"],
          role: "Web Developer Co-op",
        }}
      />
      <ExperienceTitle
        title={{
          company: "Manulife Financial",
          durations: ["Sept 2014 - Dec 2014"],
          role: ".NET Dev / DB Admin Co-op",
        }}
      />
      <ExperienceTitle
        title={{
          company: "IBM",
          durations: ["Jan 2014 - Apr 2014"],
          role: "QA Developer Co-op",
        }}
      />
    </div>
  </div>
);

export default EarlierExperience;
