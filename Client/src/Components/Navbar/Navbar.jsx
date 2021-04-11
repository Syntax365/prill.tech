import React, { Component } from "react";

import Button from "../Button/Button";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <div
          style={{
            height: "100%",
            display: "inline-block",
          }}
        >
          <div
            id="web-name"
            style={{
              float: "left",
              paddingTop: "10px",
              height: "100%",
              margin: "auto",
            }}
          >
            <a
              className={"bold"}
              style={{ textDecoration: "none", paddingLeft: "20px" }}
              href="/"
            >
              Prill.Tech
            </a>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
