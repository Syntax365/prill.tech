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
    this.getTestData();
  }

  getTestData() {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          testResponse: data,
          title: data.dailyfacts.items.day1.title,
          text_body: data.dailyfacts.items.day1.text_body,
          image: data.dailyfacts.items.day1.image,
          link: data.dailyfacts.items.day1.link,
          techTag: data.dailyfacts.items.day1.tags.technology,
          physicsTag: data.dailyfacts.items.day1.tags.physics,
          mathTag: data.dailyfacts.items.day1.tags.math,
          histTag: data.dailyfacts.items.day1.tags.history,
        });
      });
  }

  render() {
    return (
      <>
        <Section>
          <Box display={{ md: "flex" }}>
            <Box flexShrink={0} textAlign="left">
              <Image
                href={this.state.link}
                borderRadius="lg"
                mt={{ md: 30, lg: 0 }}
                width={{ md: 80 }}
                src={this.state.image}
              />
            </Box>
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
                    <div>Todays Fact: {this.state.title}</div>
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
                          {this.state.histTag && <span>Math</span>}
                        </Text>
                      </Box>
                    )}
                    {this.state.physicsTag && (
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
                          {this.state.histTag && <span>Physics</span>}
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
