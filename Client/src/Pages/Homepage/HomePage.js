import React, { Component } from "react";

import HomepageHero from "./HomepageHero.jsx";
import Button from "../../Components/Button/Button.jsx";

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
        <Button type={"Link"} to={"/testpage"} style={{ width: "400px" }}>
          Click to go to TestPage
        </Button>
      </div>
    );
  }
}

export default HomePage;
