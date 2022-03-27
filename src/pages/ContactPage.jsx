import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "../utils/Theme";
import { useForm, ValidationError } from "@formspree/react";

import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import StartButton from "../components/StartButton";
import ParticleComponent from "../components/ParticleComponent";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";
import Cv from "../components/Cv";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvodwnkj");
  const [succeeded, setSucceeded] = useState(false);
  const [buttonState, setButtonState] = useState("");
  const formRef = useRef();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (state.succeeded) {
        formRef.current.reset();
        setSucceeded(true);
      }
    }

    return () => (mounted = false);
  }, [state.succeeded]);

  return (
    <ThemeProvider theme={LightTheme}>
      <Box
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ opacity: 0, x: 800, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <StartButton theme="light" />
        <Cv />

        <Main>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Item>
              <Label>Name</Label>
              <Input type="text" name="name" id="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </Item>
            <Item>
              <Label>Email</Label>
              <Input type="email" name="email" id="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </Item>
            <Item>
              <Label>Message</Label>
              <TextArea id="message" name="message" required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Item>
            <Item>
              <Submit type="submit" disabled={state.submitting}>
                Send
              </Submit>
            </Item>
          <p>{succeeded && "Message has been successfully sent!"}</p>
          </Form>
        </Main>

        <BigTitle text="Contact" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 765px) {
    left: calc(3.5rem + 3vw);
    padding: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const Item = styled.div``;
const Input = styled.input`
  width: calc(10rem + 10vw);
  height: 30px;
  @media (max-width: 765px) {
    width: calc(8rem + 10vw);
  }
`;
const TextArea = styled.textarea`
  min-width: calc(10rem + 10vw);
  max-width: calc(1rem + 1vw);
  min-height: 100px;
  resize: none;

  @media (max-width: 765px) {
    min-width: calc(8rem + 10vw);
    max-width: calc(1rem + 1vw);
  }
`;
const Label = styled.label`
  display: block;
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  border: none;
  border-radius: 30px;
  margin-top: 1rem;
  padding: 0.5rem calc(2rem + 2vw);
  font-size: calc(1em + 0.5vw);
  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
