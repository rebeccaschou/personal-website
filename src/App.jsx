import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Project1 from "./components/Project1/Project1";
import Fun from "./components/Fun/Fun";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <About />
        <Project1 />
        <Fun />
      </div>
    </div>
  );
}

export default App;
