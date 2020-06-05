import React from "react";

import {
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
  AiFillHome,
} from "react-icons/ai";

import "./SubInfo.scss";

const SubInfo = () => (
  <div className="subinfo">
    <div className="subinfo-text">Full-Stack Developer</div>
    <div className="icon-subinfo">
      <AiFillMail />
      <div className="subinfo-text">anandrew1995@gmail.com</div>
    </div>
    <div className="icon-subinfo">
      <AiFillPhone />
      <div className="subinfo-text">647-978-3085</div>
    </div>
    <div className="icon-subinfo">
      <AiFillGithub />
      <div className="subinfo-text">ys27</div>
    </div>
    <div className="icon-subinfo">
      <AiFillHome />
      <div className="subinfo-text">Toronto, ON</div>
    </div>
  </div>
);

export default SubInfo;
