import React, { Component } from "react";

import BifurcationSVG from "../../../Components/BifurcationSVG/BifurcationSVG";

import "./HomepageHero.css";

class HomepageHero extends Component {
  render() {
    return (
      <>
        <div
          id={`hero-container`}
          style={{ paddingTop: "3px", zIndex: 10, width: "100%" }}
        >
          <BifurcationSVG width={window.innerWidth} height={900} />
        </div>
      </>
    );
  }
}

export default HomepageHero;
