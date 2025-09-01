import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Pages with Navbar + Footer */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/achievements"
          element={
            <>
              <Navbar />
              <Achievements />
              <Footer />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              <Navbar />
              <Feedback />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
