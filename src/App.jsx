import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project1 from "./components/Project1/Project1";
import Fun from "./components/Fun/Fun";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <About />
        <Project1 />
        <Fun />
      </div>
    </div>
  );
}

export default App;
