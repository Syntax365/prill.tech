import React, { Component } from "react";
import { Box, Center } from "@chakra-ui/react";

class Section extends Component {
  render() {
    const { children = "" } = this.props;
    return (
      <Box pr="20px" pl="20px" h={""}>
        <Center>
          <Box
            borderRadius="8px"
            border="solid"
            borderWidth="1px"
            borderColor="black"
            mt={"20px"}
            mb={"20px"}
            bg={"white"}
            boxShadow={"lg"}
            w={["350px", "500px", "720px", "990px", "1200px"]}
          >
            <Box m="14px">{children}</Box>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default Section;
