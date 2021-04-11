import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import Homepage from "./Pages/Homepage/HomePage.js";
import Testpage from "./Pages/Testpage/Testpage.js";

import "./base.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="Navbar-Container"><Navbar /></div>
        <Router>
          <Route path="/" exact component={Homepage} />
          <Route path="/testpage" component={Testpage} />
        </Router>
      </div>
    );
  }
}

export default App;
