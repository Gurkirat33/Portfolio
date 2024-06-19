import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Project from "./Pages/Project";
import ProjectInfo from "./Pages/ProjectInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
