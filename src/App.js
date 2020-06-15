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
        {/* <Resume fontFamily="AnonymousPro" /> */}
        <Resume fontFamily="Nunito" />
      </div>
    </>
  );
};

export default App;

const Resume = ({ fontFamily }) => (
  <div className="resume" style={styles[fontFamily]}>
    <div className="structured">
      <Name />
      <SubInfo />
      <Skills />
      <div className="grid">
        <ProfessionalExperience />
        <div className="line"></div>
        <EarlierExperience />
        <div className="line"></div>
        <RecentProjects />
        <div className="line"></div>
        <Education />
      </div>
    </div>
    <Keywords />
  </div>
);

const styles = {
  AnonymousPro: {
    fontFamily: "AnonymousPro",
    fontSize: "0.8rem",
  },
  Nunito: { fontFamily: "Nunito", fontSize: "0.9rem" },
};
