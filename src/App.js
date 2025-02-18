import React from "react";

import Name from "./components/Name/Name";
import SubInfo from "./components/SubInfo/SubInfo";
import Skills from "./components/Skills/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience/ProfessionalExperience";
import EarlierExperience from "./components/EarlierExperience/EarlierExperience";
import SideProjects from "./components/SideProjects/SideProjects";
import Education from "./components/Education/Education";
// import Keywords from "./components/Keywords/Keywords";

import "./App.scss";

const App = () => {
  return (
    <>
      <div className="App">
        <Resume />
      </div>
    </>
  );
};

export default App;

const Resume = () => (
  <div className="resume">
    <div className="structured">
      <Name />
      <SubInfo />
      <Skills />
      <ProfessionalExperience />
      <EarlierExperience />
      <SideProjects />
      <Education />
    </div>
    {/* <Keywords /> */}
  </div>
);
