import React, { Component } from "react";

import Button from "../../../Components/Button/Button.jsx";

import "./HomepageHero.css";

class HomepageHero extends Component {
  render() {
    return (
      <>
        <div id={`hero-img`} className={`hero`} />;
        <div
          id={`hero-container`}
          style={{ position: "relative", zIndex: 10, width: "100%" }}
        >
          <div style={{ width: "50%", paddingTop: "70px" }}>
            <h1 className="h1">Prill.Tech</h1>
            <p style={{ color: "white" }}>Inventing the future.</p>
            <Button type={"Link"} to={"/testpage"} style={{ width: "400px" }}>
              Click to go to TestPage
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default HomepageHero;
