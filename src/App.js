import React from "react";

import Name from "./components/Name/Name";
import SubInfo from "./components/SubInfo/SubInfo";
import Skills from "./components/Skills/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience/ProfessionalExperience";
import EarlierExperience from "./components/EarlierExperience/EarlierExperience";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Education from "./components/Education/Education";
import Keywords from "./components/Keywords/Keywords";

import "./App.scss";

const App = () => {
  return (
    <>
      <div className="App">
        <Resume font="anonymous" />
        {/* <Resume font="courier" /> */}
      </div>
    </>
  );
};

export default App;

const Resume = ({ font }) => (
  <div className={`resume ${font}`}>
    <div className="structured">
      <Name />
      <SubInfo />
      <Skills />
      <ProfessionalExperience />
      <EarlierExperience />
      <RecentProjects />
      <Education />
    </div>
    <Keywords />
  </div>
);
