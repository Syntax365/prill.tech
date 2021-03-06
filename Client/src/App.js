import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Homepage from "./Pages/Homepage/HomePage.js";
import MandelbrotBlog from "./Pages/Blog/MandelbrotSet/MandelbrotSet";
import TestPage from "./Pages/Testpage/Testpage";

import "./base.css";

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "526px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
});

class App extends Component {
  render() {
    //Static URL Base's
    const BLOG = "blog";

    return (
      <div id="App">
        <div id="Navbar-Container">
          <Navbar />
        </div>
        <Router>
          {/* Home Page */}
          <Route path="/" exact component={Homepage} />

          {/* Blog Pages */}
          <Route path={`/${BLOG}/mandelbrot-set`} component={MandelbrotBlog} />

          {/* Test Pages */}
          <Route path="/testpage" component={TestPage} />
        </Router>
        <div id="Footer-Container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
