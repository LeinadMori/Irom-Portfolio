import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
