import React, { Component } from "react";
import { Box, Text, Center } from "@chakra-ui/react";

class Section extends Component {
  render() {
    const { children = "" } = this.props;
    return (
      <Box pr="20px" pl="20px" h={"340px"}>
        <Center>
          <Box
            borderRadius="8"
            border="solid"
            borderWidth="1px"
            borderColor="#88388c"
            mt={"20px"}
            mb={"20px"}
            h={"300px"}
            bg={"white"}
            boxShadow={"lg"}
            w={["350px", "500px", "720px", "990px", "1200px"]}
          >
            <Text textAlign={`center`} pt="130px">
              {children}
            </Text>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default Section;
