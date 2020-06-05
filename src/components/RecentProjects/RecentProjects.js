import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./RecentProjects.scss";

const RecentProjects = () => (
  <div className="recent-projects">
    <SectionTitle title="Recent Projects" />
    <div className="projects">
      <Project
        title="Fund Tracker"
        desc="Keep track of transactions. Statistics, recurring transactions, cloud sync, etc. [Flutter, Dart];"
      />
      <Project
        title="MelonList"
        desc="View various music board charts with YouTube links and export to playlist [MERN];"
      />
      <Project
        title="RedditUserTransfer"
        desc="Transfer saved posts and comments, subscriptions, and user preferences to another account [MERN];"
      />
    </div>
  </div>
);

export default RecentProjects;

const Project = ({ title, desc }) => (
  <div>
    <div className="title">{title}</div>
    <div className="description">{desc}</div>
  </div>
);
