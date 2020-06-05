import React from "react";

import "./SectionTitle.scss";

const SectionTitle = ({ title }) => (
  <div className="section-title">
    <svg>
      <rect />
    </svg>
    <div>{title.toUpperCase()}</div>
  </div>
);

export default SectionTitle;
