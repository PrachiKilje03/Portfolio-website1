import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";

import {SkillsPage} from "./pages/SkillsPage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {ContactPage} from "./pages/ContactPage";
function App() {
  const appStyle = {
    minHeight: "100vh",
    background: "#f3f5fb",
    color: "#111827",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  return (
    <div style={appStyle}>
      <Navbar />

     <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;