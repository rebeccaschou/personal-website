import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="profile-image"></div>
      </div>
      <div className="about-right">
        <div className="about-text">
          <h1>Welcome!</h1>
          <p className="about-description">
            I'm <span>Rebecca Chou</span>, a sophomore studying computer science
            at Brown University!
          </p>
        </div>
      </div>
    </div>
  );
}
