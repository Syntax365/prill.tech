import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import BifurcationSVG from "../../Components/BifurcationSVG/BifurcationSVG";

import "./Testpage.css";

class TestPage extends Component {
  render() {
    return (
      <div id="test-page-container" className={`App`}>
        <div id="test-svg container">
          <div
            style={{
              float: "center",
              width: "100%",
              height: "700px",
              paddingTop: "10px",
            }}
          ></div>
          <div style={{ float: "center" }}>
            This is the test page.
            <br />
            <Button type={"Link"} to={"/"} style={{ width: "400px" }}>
              Click to go to Homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
