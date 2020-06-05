import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./ProfessionalExperience.scss";

const ProfessionalExperience = () => (
  <div className="professional-experience">
    <SectionTitle title="Professional Experience" />
    <div className="experiences">
      <ExperienceSection
        title={{
          company: "IBM",
          durations: ["Oct 2018 - Present"],
          role: "Software Developer",
        }}
        descriptions={[
          {
            mainLine:
              "Open Banking: Studied the OB specs for research and architectural design;",
            subLines: [
              "Designed and built REST APIs as micro-services as well as auth and certificate management [JS, Java, CouchDB];",
              "Produced conceptual UI quickly and with alternatives to circumvent existing limitations [React/Redux];",
              "Bash scripts to ease development, with shortcuts to frequent commands, batch execution, and log windows;",
            ],
          },
          {
            mainLine:
              "Financial Crimes Insights: As Scrum Master, organized and managed sprint events and outcomes;",
            subLines: [
              "Entity Enrichment: Full-stack production REST API & demo UI, custom NPM packages [React/Redux, MongoDB, Node/Connect];",
              "Transaction List Screening: Full-stack production UI & REST API [React/Redux, MongoDB, Flask, IBM Carbon];",
            ],
          },
        ]}
      />
      <ExperienceSection
        title={{
          company: "Desire2Learn",
          durations: ["Sept 2017 - Dec 2017"],
          role: "Software Developer Co-op",
        }}
        descriptions={[
          {
            mainLine:
              "Smart contracts deployed to Ethereum, with UI [Vue, Node, MongoDB, Solidity];",
          },
          {
            mainLine:
              "VR Application to view Brightspace content, with OAuth 2.0 [Unity 3D, C#];",
          },
          {
            mainLine:
              "Brightspace Chrome Extension, to ease user access to recent and relevant links;",
          },
        ]}
      />
      <ExperienceSection
        title={{
          company: "Intl. Financial Data Services",
          durations: ["Sept 2016 - Dec 2016", "Jan 2016 - Apr 2016"],
          role: "R&D Developer Co-op",
        }}
        descriptions={[
          {
            mainLine:
              "Transactions simulator connected to Ethereum blockchain & UI [Python, Solidity, Node/Express];",
          },
          {
            mainLine:
              "Security Week Games Web App with levels, users, and score management [Ruby on Rails];",
          },
          {
            mainLine:
              "First full-stack app from scratch: Dynamic content management and authentication [Meteor, React, MongoDB];",
          },
          {
            mainLine:
              "Smart contracts for Ethereum blockchain: Real-time read/edit info between contracts for AML with UI [Solidity, Node/Express, Vanilla JS Web];",
          },
        ]}
      />
    </div>
  </div>
);

export default ProfessionalExperience;

const ExperienceSection = ({ title, descriptions }) => (
  <div className="experience-section">
    <ExperienceTitle title={title} />
    <ExperienceDesc descriptions={descriptions} />
  </div>
);

export const ExperienceTitle = ({ title }) => {
  const { company, durations, role } = title;
  return (
    <div className="experience-title">
      <div className="company">{company}</div>
      {durations.map((duration, index) => (
        <div key={index} className="duration">
          {duration}
        </div>
      ))}
      <div className="role">{role}</div>
    </div>
  );
};

const ExperienceDesc = ({ descriptions }) => (
  <ul className="experience-desc">
    {descriptions.map((desc, index) => (
      <React.Fragment key={index}>
        <li>{desc.mainLine}</li>
        {desc.subLines && (
          <ul>
            {desc.subLines.map((line, index) => (
              <li key={index} className="subline">
                {line}
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    ))}
  </ul>
);
