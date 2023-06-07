import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Navbar/Menu/Menu";
import About from "./components/About/About";
import Project1 from "./components/Project1/Project1";
import Fun from "./components/Fun/Fun";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Project1 />
        <Fun />
      </div>
    </div>
  );
}

export default App;
