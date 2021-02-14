import React, { Component } from "react";

import Button from "../../Components/Button/Button";

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
      </div>
    );
  }
}

export default TestPage;
