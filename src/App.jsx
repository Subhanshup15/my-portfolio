import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const Layout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {location.pathname === "/" && (
        <nav className="navbar">
          <div className="navbar-logo">SP</div>

          {/* Desktop Links */}
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/about"></Link></li>
          </ul>

          {/* Hamburger */}
          <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="mobile-nav">
              <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
              <li><a onClick={() => setMenuOpen(false)} href="#skills">Skills</a></li>
              <li><a onClick={() => setMenuOpen(false)} href="#experience">Experience</a></li>
              <li><a onClick={() => setMenuOpen(false)} href="#projects">Projects</a></li>
              <li><a onClick={() => setMenuOpen(false)} href="#education">Education</a></li>
              <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
              <li><Link onClick={() => setMenuOpen(false)} to="/about"></Link></li>
            </ul>
          )}
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        © {new Date().getFullYear()} SUBHANSHU PARDESHI. All rights reserved.
      </footer>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
