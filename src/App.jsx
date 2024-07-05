import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Project from "./Pages/Project";
import ProjectInfo from "./Pages/ProjectInfo";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import ScrollToTop from "./Components/ScrollToTop";
import Blog from "./Pages/Blog";

function App() {
  return (
    <Router basename="/Portfolio/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
