import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu/Menu";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Fun from "./components/Fun/Fun";
import "./App.scss";
import { useState } from "react";

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
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Project
          id={projects[0].id}
          title={projects[0].title}
          tags={projects[0].tags}
          description={projects[0].description}
          image={projects[0].image}
          alt={projects[0].alt}
        />
        <Project
          id={projects[1].id}
          title={projects[1].title}
          tags={projects[1].tags}
          description={projects[1].description}
          image={projects[1].image}
          alt={projects[1].alt}
        />
        <Fun />
      </div>
    </div>
  );
}

export default App;
