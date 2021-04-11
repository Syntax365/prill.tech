import React, { Component } from "react";

import HomepageHero from "./Hero/HomepageHero.jsx";
import Button from "../../Components/Button/Button";

import "./Homepage.css";

class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     testResponse: {},
  //   };
  // }

  // componentDidMount() {
  //   this.getTestData();
  // }

  // getTestData() {
  //   fetch("/api/test")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         testResponse: data,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="App">
        <HomepageHero />
        <div style={{ width: "100%", paddingTop: "70px" }}>
          <h2>Temporary Nav Links</h2>
          <Button type={"Link"} to={"/testpage"} style={{ width: "400px" }}>
            Click to go to TestPage
          </Button>
          <br />
          <Button
            type={"Link"}
            to={"/blog/mandelbrot-set"}
            style={{ width: "400px" }}
          >
            Click to go to Mandelbrot Set
          </Button>
        </div>
      </div>
    );
  }
}

export default HomePage;
