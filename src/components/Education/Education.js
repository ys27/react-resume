import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Education.scss";

import UWLogo from "../../images/uw-logo.png";

const Education = () => (
  <div className="education">
    <SectionTitle title="Education" />
    <div className="schools">
      <Program
        award="Honours Bachelor of Applied Science in Computer Engineering (with Distinction)"
        school="University of Waterloo, Class of 2018"
      />
    </div>
  </div>
);

export default Education;

const Program = ({ award, school }) => (
  <div className="program">
    <div className="award">{award}</div>
    <div className="school">
      <img src={UWLogo} alt="UW Logo" />
      <div class="school-name">{school}</div>
    </div>
  </div>
);
