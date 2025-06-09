import "./App.scss";
import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// Import components (linked to main page)
import Navbar from "./components/NavigationBar/NavigationBar";
import Menu from "./components/NavigationBar/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Fun from "./components/Fun/Fun";

// Import project detail pages (linked to main page)
import Chirp from "./components/Projects/ProjectDetails/Chirp"
import PersonalWebsite from "./components/Projects/ProjectDetails/PersonalWebsite"
import MartialArtsApp from "./components/Projects/ProjectDetails/MartialArtsApp"

// Import components (separate from main page)
import QuickBili from "./components/QuickBili/QuickBili";

// Import data for projects and gallery
import featuredProjects from "./components/Data/FeaturedProjectsData";
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
            {/* Main components (connected to main site) */}
            <Route path="/" element={<Home projects={featuredProjects} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/forfun" element={<Fun images={galleryData} />}></Route>

            {/* Project detail pages */}
            <Route path="/chirp" element={<Chirp/>}></Route>
            <Route path="/martial-arts-app" element={<MartialArtsApp/>}></Route>
            <Route path="/personal-website" element={<PersonalWebsite/>}></Route>

            {/* Disconnected from main site */}
            <Route path="/quickbili/privacy" element={<QuickBili />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
