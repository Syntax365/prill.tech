import React, { Component } from "react";

import HomepageHero from "./Hero/HomepageHero.jsx";

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
      </div>
    );
  }
}

export default HomePage;
