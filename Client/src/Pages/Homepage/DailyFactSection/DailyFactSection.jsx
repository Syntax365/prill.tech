import React, { Component } from "react";
import { Box, Text, Center } from "@chakra-ui/react";

import Section from "../../../Components/Section/Section";

class DailyFactSection extends Component {
  render() {
    return (
      <>
        <Section>Section 1</Section>
        <Section>Section 2</Section>
        <Section>Section 3</Section>
      </>
    );
  }
}

export default DailyFactSection;
