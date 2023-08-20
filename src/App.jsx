import React from "react";
import "./App.scss";
import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// Import components (linked to main page)
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu/Menu";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Fun from "./components/Fun/Fun";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

// Import components (separate from main page)
import QuickBili from "./components/QuickBili/QuickBili";

// Import data for projects and gallery
import minorProjects from "./components/Data/MinorProjectsData";
import majorProjects from "./components/Data/MajorProjectsData";
import galleryData from "./components/Data/GalleryData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Uses HashRouter instead of BrowserRouter for compatibility with GitHub pages
    <HashRouter>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            {/* First section of routes do NOT connect to main app body */}
            <Route path="/quickbili" element={<QuickBili />}></Route>
            {/* Routes below connect to main website body */}
            <Route path="/" element={<About />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/projects"
              element={
                <Projects projects={majorProjects} array={minorProjects} />
              }
            ></Route>
            <Route
              path="/forfun"
              element={<Fun images={galleryData} />}
            ></Route>
            {majorProjects.map((project) => (
              <Route
                path={"/project-details-" + project.id}
                element={
                  <ProjectDetails
                    id={project.id}
                    tags={project.tags}
                    title={project.title}
                    description={project.descriptionExtended}
                    role={project.role}
                    timeline={project.timeline}
                    tools={project.tools}
                    image={project.image}
                  />
                }
              ></Route>
            ))}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
