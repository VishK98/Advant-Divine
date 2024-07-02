import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import Service from "./Components/Service/service";
import Contact from "./Components/Contact/contact";
import Search from "./Components/Search/Search";
import Men from "./Components/Men/Men";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/search" element={<Search />} />
          {/* <Route exact path="/Mens" element={<Mens />} /> */}
          <Route exact path="/Men" element={<Men />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
