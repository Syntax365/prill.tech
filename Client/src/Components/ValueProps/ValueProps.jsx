import React, { Component } from "react";
import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";

import lightBulbIcon from "../../images/emoji_objects_black_24dp.svg";
import engineerIcon from "../../images/engineering_black_24dp.svg";
import imagineIcon from "../../images/psychology_black_24dp.svg";

class ValueProps extends Component {
  render() {
    return (
      <Box pr="20px" pl="20px">
        <Center>
          <Box
            mt={"5px"}
            mb={"5px"}
            bg={"white"}
            w={["350px", "500px", "720px", "990px", "1200px"]}
          >
            {/* <Heading textAlign="center">Centered</Heading> */}
            <Box
              m="14px"
              display="flex"
              justifyContent="space-between"
              textAlign="center"
            >
              <Box w="350px" id="left-prop">
                <Stack>
                  <Center>
                    <Image src={lightBulbIcon} w="65px" />
                  </Center>
                  <Heading mt="0" size="sm">
                    Imagine.
                  </Heading>
                </Stack>
              </Box>
              <Box w="350px" id="center-prop">
                <Stack>
                  <Center>
                    <Image src={imagineIcon} w="65px" />
                  </Center>
                  <Heading mt="0" size="sm">
                    Innovate.
                  </Heading>
                </Stack>
              </Box>
              <Box w="350px" id="right-prop">
                <Stack>
                  <Center>
                    <Image src={engineerIcon} w="65px" ml="9px" />
                  </Center>
                  <Heading mt="0" size="sm">
                    Engineer.
                  </Heading>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default ValueProps;
