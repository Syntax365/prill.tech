import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import TestSVG from "../../Components/TestSVG/TestSVG";
import MandelbrotSetSVG from "../../Components/MandelbrotSetSVG/MandelbrotSetSVG";

import "./Testpage.css";

class TestPage extends Component {
  render() {
    return (
      <div id="test-page-container" className={`App`}>
        This is the test page.
        <br />
        <Button type={"Link"} to={"/"} style={{ width: "400px" }}>
          Click to go to TestPage
        </Button>
        <div id="test-svg container">
          <div style={{ float: "center", width: "100%" }}>
            <MandelbrotSetSVG width={600} />
          </div>
          <div style={{ float: "center" }}></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default TestPage;
