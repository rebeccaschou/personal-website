import React from "react";
import "./App.scss";
import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// Import components (linked to main page)
import Navbar from "./components/NavigationBar/NavigationBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Menu from "./components/NavigationBar/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Fun from "./components/Fun/Fun";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

// Import project detail pages (linked to main page)
import Chirp from "./components/Projects/ProjectDetails/Chirp"
import PersonalWebsite from "./components/Projects/ProjectDetails/PersonalWebsite"
import MartialArtsApp from "./components/Projects/ProjectDetails/MartialArtsApp"

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
            <Route path="/quickbili/privacy" element={<QuickBili />}></Route>
            {/* Routes below connect to main website body */}
            <Route path="/" element={<Home projects={majorProjects} array={minorProjects} />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route
              path="/projects"
              element={
                <Projects projects={majorProjects} array={minorProjects} />
              }
            ></Route> */}
            <Route
              path="/forfun"
              element={<Fun images={galleryData} />}
            ></Route>
            <Route path="/chirp" element={<Chirp/>}></Route>
            <Route path="/martial-arts-app" element={<MartialArtsApp/>}></Route>
            <Route path="/personal-website" element={<PersonalWebsite/>}></Route>
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
