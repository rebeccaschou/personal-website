import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu/Menu";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Fun from "./components/Fun/Fun";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import "./App.scss";

import React from "react";
import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      color: [255, 182, 193],
      id: "project1",
      title: "Personal Website",
      tags: ["UI/UX", "React", "Django"],
      role: "Web Developer",
      timeline: "Jun - Aug 2023 (14 wks)",
      tools: ["React", "Django", "FIGMA"],
      description:
        "Designing a personal website (that you're looking at right now!) to show personal projects, publications, and for-fun crafts!",
      descriptionExtended:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "assets/personal-website-image.png",
      alt: "project 1",
    },
    {
      color: [139, 182, 189],
      id: "project2",
      title: "PediTools: Fenton 2013",
      tags: ["Swift", "XCode", "CoreData"],
      role: "Mobile Developer",
      timeline: "Jun - Aug 2023 (14 wks)",
      tools: ["Swift", "XCode"],
      description:
        "Designed and published mobile app to provide neonatologists with growth projections and warnings about abnormal growth for newborns, based on the Fenton 2013 growth chart.",
      descriptionExtended:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "assets/peditools-image.png",
      alt: "project 2",
    },
  ];

  return (
    <HashRouter>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/projects"
              element={<Projects projects={projects} />}
            ></Route>
            <Route path="/forfun" element={<Fun />}></Route>
            <Route
              path={"/project-details-" + projects[0].id}
              element={
                <ProjectDetails
                  id={projects[0].id}
                  tags={projects[0].tags}
                  title={projects[0].title}
                  description={projects[0].descriptionExtended}
                  role={projects[0].role}
                  timeline={projects[0].timeline}
                  tools={projects[0].tools}
                />
              }
            ></Route>
            <Route
              path={"/project-details-" + projects[1].id}
              element={
                <ProjectDetails
                  id={projects[1].id}
                  tags={projects[1].tags}
                  title={projects[1].title}
                  description={projects[1].descriptionExtended}
                  role={projects[1].role}
                  timeline={projects[1].timeline}
                  tools={projects[1].tools}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
