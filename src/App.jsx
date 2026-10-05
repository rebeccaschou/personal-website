import "./App.scss";
import { useState, useEffect } from "react";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";

// Import components (linked to main page)
import Navbar from "./components/NavigationBar/NavigationBar";
import Menu from "./components/NavigationBar/Menu/Menu";
import Home from "./components/Home/Home";
import CV from "./components/CV/CV";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

// Scroll to top component that listens to route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll both window and the app container
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Scroll the .app and .sections containers
    const appElement = document.querySelector(".app");
    if (appElement) {
      appElement.scrollTop = 0;
    }
    const sectionsElement = document.querySelector(".sections");
    if (sectionsElement) {
      sectionsElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Uses HashRouter instead of BrowserRouter for compatibility with GitHub pages
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            {/* Main components (connected to main site) */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/research/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
