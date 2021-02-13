import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/HomePage.js";
import Testpage from "./Pages/Testpage/Testpage.js";

class App extends Component {
  render() {
    return (
      <div id="App">
        This is the App Container
        <Router>
          <Route path="/" exact component={Homepage} />
          <Route path="/testpage" component={Testpage} />
        </Router>
      </div>
    );
  }
}

export default App;
