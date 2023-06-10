import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu/Menu";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Fun from "./components/Fun/Fun";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import "./App.scss";

import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      id: "project1",
      title: "Personal Website",
      tags: ["UI/UX", "React", "Django"],
      description:
        "Designing a personal website (that you're looking at right now!) to show personal projects, publications, and for-fun crafts!",
      image: "assets/personal-website-image.png",
      alt: "project 1",
    },
    {
      id: "project2",
      title: "PediTools: Fenton 2013",
      tags: ["Swift", "XCode", "CoreData"],
      description:
        "Designed and published mobile app to provide neonatologists with growth projections and warnings about abnormal growth for newborns, based on the Fenton 2013 growth chart.",
      image: "assets/peditools-image.png",
      alt: "project 2",
    },
  ];

  return (
    <BrowserRouter>
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
                <ProjectDetails id={projects[0].id} title={projects[0].title} />
              }
            ></Route>
            <Route
              path={"/project-details-" + projects[1].id}
              element={
                <ProjectDetails id={projects[1].id} title={projects[1].title} />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
