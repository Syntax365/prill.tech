import React, { Component } from "react";

import MandelbrotSetSVG from "../../../Components/MandelbrotSetSVG/MandelbrotSetSVG";

class MandelbrotSet extends Component {
  render() {
    return (
      <div id="test-page-container" className={`App`}>
        <div id="test-svg container">
          <div
            style={{
              float: "center",
              width: "100%",
              height: "700px",
            }}
          >
            <MandelbrotSetSVG width={900} height={700} />
          </div>
          <div style={{ float: "center" }}>TODO: Build Blog Tempalte</div>
        </div>
      </div>
    );
  }
}

export default MandelbrotSet;
