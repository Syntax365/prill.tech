import React, { Component } from "react";

import BifurcationParent from "../../../Components/BifurcationSVG/BifurcationParent";
import Button from "../../../Components/Button/Button";
import "./HomepageHero.css";

class HomepageHero extends Component {
  render() {
    return (
      <>
        <div
          id={`hero-container`}
          style={{
            paddingTop: "3px",
            zIndex: 10,
            width: "100%",
            background: "",
          }}
        >
          <div
            className="float-left"
            style={{
              width: "50%",
              paddingTop: "70px",
              textAlign: "center",
            }}
          >
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
          <div
            className={``}
            style={{
              height: "500px",
            }}
          >
            <BifurcationParent width={document.body.clientWidth} height={700} />
          </div>
          <div
            style={{
              background: "white",
              width: "100%",
              height: "400px",
              top: "0",
              zIndex: "2",
              borderTop: "solid",
              borderTopWidth: "1px",
            }}
          ></div>
        </div>
      </>
    );
  }
}

export default HomepageHero;
