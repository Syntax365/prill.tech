import React, { Component } from "react";
//import MandelbrotSetSVG from "../../Components/MandelbrotSetSVG/MandelbrotSetSVG";
import { Image } from "@chakra-ui/react";
import prilltechLogo from "../../images/logo/prilltech_logo.svg";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <div
          style={{
            display: "inline-block",
          }}
        >
          <div
            id="web-name"
            style={{
              float: "left",
            }}
          >
            <a
              className={"bold"}
              style={{
                textDecoration: "none",
                verticalAlign: "middle",
                lineHeight: "2",
                height: "60px",
                display: "inline-block",
              }}
              href="/"
            >
              <span style={{ float: "left", paddingTop: "9px" }}>
                <img
                  width={"57px"}
                  height={"57px"}
                  src={prilltechLogo}
                  objectFit="fill"
                />
                {/* <MandelbrotSetSVG width={50} height={50} type="icon" /> */}
              </span>
              <span
                style={{
                  color: "#000000",
                  float: "right",
                }}
              >
                Prill.<span style={{ color: "#1F51FF" }}>Tech</span>
              </span>
            </a>
          </div>
        </div>
        {/* <div
          id="nav-menu"
          className={"float-right"}
          style={{
            height: "60px",
            paddingRight: "20px",
          }}
        >
          <div
            style={{
              margin: "auto",
              position: "relative",
              display: "table-cell",
              paddingTop: "19px",
              paddingLeft: "20px",
            }}
          >
            <DropDownMenu parentLabel="Links">
              <MenuGroup title="Blog Links">
                <MenuItem>
                  <Link href="/blog/mandelbrot-set">Mandlebrot Set</Link>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Development Pages">
                <MenuItem>
                  <Link href="/testpage">Testpage 1</Link>
                </MenuItem>
              </MenuGroup>
            </DropDownMenu>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
