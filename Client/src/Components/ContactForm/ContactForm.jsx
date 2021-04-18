import React, { Component } from "react";
import {
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Text,
  Heading,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import Section from "../Section/Section";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: false,
      messageError: false,
      submitSuccessful: false,
    };
  }

  runValidation(email, message) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var shouldSubmit = true;

    if (email && email.match(emailRegex)) {
      this.setState({ emailError: false });
    } else {
      shouldSubmit = false;
      this.setState({ emailError: true });
    }

    if (message) {
      this.setState({ messageError: false });
    } else {
      shouldSubmit = false;
      this.setState({ messageError: true });
    }

    if (shouldSubmit) this.sendEmail(email, message);
  }

  sendEmail(email, message) {
    console.log("Sending Email");
    fetch("/send", {
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
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          console.log("Successful Email Submission!");
          this.setState({ submitSuccessful: true });
        }
      })
      .catch((err) => {
        console.error("here is the error: ", err);
      });
  }

  render() {
    return (
      <>
        <Section>
          <Box w="100%" textAlign="Center">
            <Heading as="h3" size="lg" id="contact-field-header">
              {this.state.submitSuccessful ? "Thank You!" : "Contact Us"}
            </Heading>
            <Text>
              {this.state.submitSuccessful
                ? "We recieved your email and will be in contact."
                : "We are always looking for feedback and new ideas."}
            </Text>
          </Box>
          <FormControl
            pt="12px"
            id="email"
            isRequired
            {...(this.state.emailError
              ? { isInvalid: true }
              : { isInvalid: false })}
          >
            <FormLabel>Email Address:</FormLabel>
            <Input
              id="email-contact-field"
              placeholder="xxxxx@example.com"
              type="email"
              {...(this.state.submitSuccessful
                ? { isDisabled: true }
                : { isDisabled: false })}
            />
            <FormErrorMessage marginTop="3px">
              Error: Please use a valid Email Address.
            </FormErrorMessage>
          </FormControl>
          <FormControl
            id="message"
            pt="12px"
            isRequired
            {...(this.state.messageError
              ? { isInvalid: true }
              : { isInvalid: false })}
          >
            <FormLabel>Message:</FormLabel>
            <Textarea
              id="message-contact-field"
              placeholder="Type a message regarding your inquiry."
              type="message"
              {...(this.state.submitSuccessful
                ? { isDisabled: true }
                : { isDisabled: false })}
            />
            <FormErrorMessage marginTop="0px">
              Error: The Message field is required.
            </FormErrorMessage>
          </FormControl>
          <Stack pt="12px" direction="row" spacing={4}>
            <Center width="100%">
              <Button
                id="submit-contact-button"
                onClick={() => {
                  this.runValidation(
                    document.getElementById("email-contact-field").value,
                    document.getElementById("message-contact-field").value,
                  );
                }}
                loadingText="Sending"
                variant="outline"
                borderColor="black"
                {...(this.state.submitSuccessful
                  ? { isDisabled: true }
                  : { isDisabled: false })}
              >
                {this.state.submitSuccessful
                  ? "Email Sent Successfully"
                  : "Send Email"}
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
