import React, { Component } from "react";

import BifurcationParent from "../../../Components/BifurcationSVG/BifurcationParent";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { Text, Heading, Box } from "@chakra-ui/react";

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
              width: "100%",
              height: "50px",
              textAlign: "center",
            }}
          >
            <Box pt={250}>
              <Heading as="h1" size="2xl">
                Change is the only constant.
              </Heading>
              <Text fontWeight="semibold">Imagine. Innovate. Engineer.</Text>
            </Box>
          </div>
          <div
            className={``}
            style={{
              height: "500px",
            }}
          >
            <BifurcationParent width={document.body.clientWidth} height={500} />
          </div>
        </div>
      </>
    );
  }
}

export default HomepageHero;
