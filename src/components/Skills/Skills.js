import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Skills.scss";

const Skills = () => (
  <div className="skills">
    <SectionTitle title="Skills" />
    <div className="sections">
      <SkillSection
        title="Languages"
        items={["C++", "C#", "Dart", "Java", "JavaScript [+TS]", "Python"]}
      />
      <SkillSection
        title="Frameworks & Libraries"
        items={["Jest", "Node", "React", "Redux", "Sagas", "Sass"]}
      />
      <SkillSection
        title="DevOps"
        items={["Artifactory", "Docker", "Jenkins", "Kubernetes", "Openshift"]}
      />
      <SkillSection
        title="Misc."
        items={[
          "Bash/Zsh Scripts",
          "Chrome Extensions",
          "Ethereum Blockchain",
          "Flutter",
          "Custom Node Packages",
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
