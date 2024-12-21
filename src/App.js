import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/layouts/css/style.css";

// import { BrowserRouter as Routes, Route, HashRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<h1>Service Page</h1>} />
          <Route path="/rooms" element={<h1>Rooms Page</h1>} />
          <Route path="/booking" element={<h1>Booking Page</h1>} />
          <Route path="/team" element={<h1>Our Team Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
