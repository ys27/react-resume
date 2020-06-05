import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Education.scss";

const Education = () => (
  <div className="education">
    <SectionTitle title="Education" />
    <div className="schools">
      <School
        award="Honours Bachelor of Applied Science in Computer Engineering (with Distinction)"
        school="University of Waterloo, Class of 2018"
      />
    </div>
  </div>
);

export default Education;

const School = ({ award, school }) => (
  <div className="school">
    <div className="award">{award}</div>
    <div className="school">{school}</div>
  </div>
);
