import "./App.css";
import Loader from "./Components/Loader";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Curriculum from "./Components/Curriculum";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Careers from "./Components/Careers";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4);
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              exact
              path="/curriculum"
              element={
                <>
                  <Navbar />
                  <Curriculum />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              exact
              path="/faq"
              element={
                <>
                  <Navbar />
                  <Faq />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              exact
              path="/contact"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              exact
              path="/careers"
              element={
                <>
                  <Navbar />
                  <Careers />
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
