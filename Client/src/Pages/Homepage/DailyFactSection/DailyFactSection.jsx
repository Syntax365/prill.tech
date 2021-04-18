import React, { Component } from "react";
import { Heading, Box, Text, Center, Image, Link } from "@chakra-ui/react";

import Section from "../../../Components/Section/Section";

class DailyFactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {},
      text_body: {},
      image: {},
      link: {},
      techTag: {},
      physicsTag: {},
      mathTag: {},
      histTag: {},
    };
  }

  componentDidMount() {
    this.getFactData();
  }

  getFactData() {
    var incDays = new URLSearchParams(window.location.search).get("incDays");
    if (!incDays) incDays = 0;
    fetch("/api/fun-fact?incDays=" + incDays)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          testResponse: data,
          title: data.title,
          text_body: data.text_body,
          image: data.image,
          link: data.link,
          techTag: data.tags.technology,
          scienceTag: data.tags.science,
          mathTag: data.tags.math,
          histTag: data.tags.history,
        });
      });
  }

  render() {
    return (
      <>
        <Section>
          <Box display={{ md: "flex" }}>
            <Center flexShrink={0}>
              <Box textAlign="left">
                <Image
                  href={this.state.link}
                  borderRadius="lg"
                  mt={{ lg: 0 }}
                  width={{ md: "320px", lg: "320px" }}
                  height={{ md: "240px", lg: "180px" }}
                  objectFit="cover"
                  alt="Daily Fact Image"
                  // minHeight={{ md: "240px", lg: "180px" }}
                  // maxHeight={{ md: "240px", lg: "180px" }}
                  src={this.state.image}
                />
              </Box>
            </Center>
            <Center>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Link
                  display="block"
                  fontSize="lg"
                  lineHeight="normal"
                  fontWeight="semibold"
                  target="_blank"
                  href={this.state.link}
                >
                  {this.state.testResponse && (
                    <div>Today's Fact: {this.state.title}</div>
                  )}
                </Link>
                <Text mt={"10px"} color="gray.500">
                  {this.state.testResponse && (
                    <span>{this.state.text_body}</span>
                  )}
                </Text>
                {this.state.testResponse && (
                  <Box display="flex" mt="10px">
                    {this.state.techTag && (
                      <Box w="120px" mr="5px">
                        <Text
                          borderRadius="6px"
                          textAlign="center"
                          mt="10px"
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="sm"
                          letterSpacing="wide"
                          color="white"
                          background="purple.500"
                        >
                          Technology
                        </Text>
                      </Box>
                    )}
                    {this.state.mathTag && (
                      <Box w="120px" mr="5px">
                        <Text
                          borderRadius="6px"
                          textAlign="center"
                          mt="10px"
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="sm"
                          letterSpacing="wide"
                          color="white"
                          background="orange.500"
                        >
                          {this.state.mathTag && <span>Math</span>}
                        </Text>
                      </Box>
                    )}
                    {this.state.scienceTag && (
                      <Box w="120px" mr="5px">
                        <Text
                          borderRadius="6px"
                          textAlign="center"
                          mt="10px"
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="sm"
                          letterSpacing="wide"
                          color="white"
                          background="red.500"
                        >
                          {this.state.scienceTag && <span>Science</span>}
                        </Text>
                      </Box>
                    )}
                    {this.state.histTag && (
                      <Box w="120px">
                        <Text
                          borderRadius="6px"
                          textAlign="center"
                          mt="10px"
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="sm"
                          letterSpacing="wide"
                          color="white"
                          background="blue.500"
                        >
                          {this.state.histTag && <span>History</span>}
                        </Text>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Center>
          </Box>
        </Section>
      </>
    );
  }
}

export default DailyFactSection;
