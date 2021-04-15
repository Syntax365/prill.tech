import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import MandelbrotSetSVG from "../../Components/MandelbrotSetSVG/MandelbrotSetSVG";
import TestSVG from "../../Components/TestSVG/TestSVG";

import "./Testpage.css";

class TestPage extends Component {
  render() {
    return (
      <div id="test-page-container" className={`App`}>
        xyz
        {/* <TestSVG height={900} width={document.body.width} /> */}
      </div>
    );
  }
}

export default TestPage;
