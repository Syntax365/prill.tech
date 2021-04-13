import React, { Component } from "react";

import BifurcationParent from "../../../Components/BifurcationSVG/BifurcationParent";
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
              paddingTop: "130px",
              textAlign: "center",
            }}
          >
            <div>
              <h1 style={{ marginBottom: "0px " }}>
                Change is the only constant.
              </h1>
              <p style={{ marginTop: "10px" }}>Imagine. Innovate. Engineer.</p>
            </div>
          </div>
          <div
            className={``}
            style={{
              height: "760px",
            }}
          >
            <BifurcationParent width={document.body.clientWidth} height={900} />
          </div>
        </div>
      </>
    );
  }
}

export default HomepageHero;
