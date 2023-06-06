import React from "react";
import "./Project1.scss";

export default function Project1() {
  return (
    <div className="project1" id="project1">
      <div className="project1-left">
        <img
          className="project1-img"
          src="assets/sample-project-image.png"
          alt="project 1"
        ></img>
      </div>
      <div className="project1-right">
        <div className="project1-text">
          <h1>Personal Website</h1>
          <p className="project1-tags"> UI/UX | React | Django</p>
          <p className="project1-description">
            Designing a personal website (that you're looking at right now!) to
            show personal projects, publications, and for-fun crafts!
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
