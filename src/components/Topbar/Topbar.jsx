import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            rebecca.
          </a>
        </div>
        <div className="right">
          <ul className="navitems">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project1">Projects</a>
            </li>
            <li>
              <a href="#fun">For Fun</a>
            </li>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
