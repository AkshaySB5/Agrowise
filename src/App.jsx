import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Make sure to adjust the path according to your file structure
import Home from "./pages/Home";
import Predictpage from "./components/Predictpage";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predictpage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
