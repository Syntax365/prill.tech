import React, { Component } from "react";
import Homepage from "./Pages/Homepage/HomePage.js";

class App extends Component {
  render() {
    return (
      <div id="App">
        This is the App Container
        <Homepage />
      </div>
    );
  }
}

export default App;
