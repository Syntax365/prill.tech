import React, { Component } from "react";
import {
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Text,
  Heading,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import Section from "../Section/Section";

class ContactForm extends Component {
  sendEmail(email, message) {
    console.log("Sending Email");
    fetch("/send?body", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("here is the response: ", res);
      })
      .catch((err) => {
        console.error("here is the error: ", err);
      });
    document.getElementById("submit-contact-button").innerText =
      "Successful Submit";
    document
      .getElementById("submit-contact-button")
      .setAttribute("disabled", true);
  }

  render() {
    return (
      <>
        <Section>
          <Box w="100%" textAlign="Center">
            <Heading as="h3" size="lg">
              Contact Us
            </Heading>
            <Text>We are always looking for feedback and great ideas.</Text>
          </Box>
          <FormControl pt="12px" id="email" isRequired>
            <FormLabel>Email Address:</FormLabel>
            <Input
              id="email-contact-field"
              placeholder="xxxxx@example.com"
              type="email"
            />
          </FormControl>
          <FormControl id="message" pt="12px" isRequired>
            <FormLabel>Message:</FormLabel>
            <Textarea
              id="message-contact-field"
              placeholder="Type a message regarding your inquiry."
              type="message"
            />
          </FormControl>
          <Stack pt="12px" direction="row" spacing={4}>
            <Center width="100%">
              <Button
                id="submit-contact-button"
                onClick={() => {
                  this.sendEmail(
                    document.getElementById("email-contact-field").value,
                    document.getElementById("message-contact-field").value,
                  );
                }}
                loadingText="Sending"
                variant="outline"
                borderColor="black"
              >
                Send Email
              </Button>
            </Center>
          </Stack>
        </Section>
      </>
    );
  }
}
export default ContactForm;

//   constructor(props) {
//     super(props);
//     this.state = {
//       testResponse: {},
//     };
//   }

//   componentDidMount() {
//     this.getTestData();
//   }

//   getTestData() {
//     fetch("/api/test")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           testResponse: data,
//         });
//         this.sendEmail();
//       });

//     this.sendEmail();
//   }

//   sendEmail(name, email, message) {
//     fetch("/send", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "tyronebalogna",
//         email: "syntax365@gmail.com",
//         message: "Success!",
//       }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("here is the response: ", res);
//       })
//       .catch((err) => {
//         console.error("here is the error: ", err);
//       });
//   }
