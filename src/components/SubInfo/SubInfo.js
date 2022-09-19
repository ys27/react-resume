import React, { useState } from "react";

import {
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
  AiFillHome,
} from "react-icons/ai";

import "./SubInfo.scss";

const infoDetails = [
  {
    icon: <AiFillMail />,
    text: "anandrew1995@gmail.com",
  },
  {
    icon: <AiFillPhone />,
    text: "647-978-3085",
  },
];

const SubInfo = () => {
  const [showCopied, setShowCopied] = useState(-1);

  return (
    <div className="subinfo">
      <div className="subinfo-text">Full-stack Developer</div>
      {infoDetails.map((info, index) => (
        <div
          key={info.text}
          className="icon-subinfo actionable"
          onClick={() => {
            navigator.clipboard.writeText(info.text);
            setShowCopied(index);
            setTimeout(() => setShowCopied(false), 500);
          }}
        >
          {info.icon}
          <div className="subinfo-text">{info.text}</div>
          {showCopied === index && <div className="copied-alert">Copied!</div>}
        </div>
      ))}
      <a
        className="icon-subinfo actionable"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/ys27"
      >
        <AiFillGithub />
        <div className="subinfo-text">ys27</div>
      </a>
      <div className="icon-subinfo">
        <AiFillHome />
        <div className="subinfo-text">Toronto, ON</div>
      </div>
    </div>
  );
};

export default SubInfo;
