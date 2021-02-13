import React, { Component } from "react";

import Component1 from "../../Components/Component1.jsx";
import Button from "../../Components/Button/Button.jsx";

import "./Homepage.css";

class HomePage extends Component {
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
      <div className="App">
        <h1>{this.state.testResponse.fullName}</h1>
        <p>Test Response: {this.state.testResponse.integrationTest}</p>
        <Component1 />
        <Button />
      </div>
    );
  }
}

export default HomePage;
