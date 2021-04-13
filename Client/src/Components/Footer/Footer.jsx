import { Box, Text } from "@chakra-ui/react";
import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        py="12"
        px={{ base: "4", md: "8" }}
        bgColor={"gray.300"}
      >
        <Box textAlign="center">
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Prill Tech, LLC. All rights
            reserved.
          </Text>
        </Box>
      </Box>
    );
  }
}

export default Footer;
