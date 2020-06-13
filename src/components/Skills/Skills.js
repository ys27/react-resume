import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Skills.scss";

const Skills = () => (
  <div className="skills">
    <SectionTitle title="Skills" />
    <div className="sections">
      <SkillSection
        title="Languages"
        items={["C++", "C#", "Dart", "Java", "JavaScript", "Python"]}
      />
      <SkillSection
        title="Frameworks/Libs"
        items={["Angular", "Jest", "Node", "React", "Sass"]}
      />
      <SkillSection
        title="DevOps"
        items={["Docker", "Jenkins", "Kubernetes", "Openshift"]}
      />
      <SkillSection
        title="Misc."
        items={[
          "Bash/Zsh Scripts",
          "Chrome Extensions",
          "Ethereum Blockchain",
          "Flutter",
          "NPM Packages",
          "React Native",
          "Unity + VR",
        ]}
      />
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
