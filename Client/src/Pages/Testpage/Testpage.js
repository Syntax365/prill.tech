import React, { Component } from "react";

import Component1 from "../../Components/Component1.jsx";

import "./Testpage.css";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testResponse: {},
    };

    this.getTestData();
  }

  getTestData() {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          testResponse: data,
        });
      });
  }

  render() {
    return (
      <div id="test-page-container" className={`App`}>
        This is the test page.
      </div>
    );
  }
}

export default TestPage;
