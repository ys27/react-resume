import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import Data from "./Data";

import "./Skills.scss";

const Skills = () => (
  <div className="skills">
    <SectionTitle title="Skills" />
    <div className="sections">
      {Object.entries(Data).map(([title, items], i) => (
        <SkillSection key={i} title={title} items={items} />
      ))}
    </div>
  </div>
);

export default Skills;

const SkillSection = ({ title, items }) => (
  <div className="section">
    <div className="title">{title}</div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
