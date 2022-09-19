import React from "react";

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
  return (
    <div className="subinfo">
      <div className="subinfo-text">Full-stack Developer</div>
      {infoDetails.map((info) => (
        <div
          key={info.text}
          className="icon-subinfo cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(info.text);
          }}
        >
          {info.icon}
          <div className="subinfo-text">{info.text}</div>
        </div>
      ))}
      <a
        className="icon-subinfo cursor-pointer"
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
