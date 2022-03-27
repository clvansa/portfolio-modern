import React from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../utils/Theme";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import ParticleComponent from "../components/ParticleComponent";
import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import StartButton from "../components/StartButton";
import { motion } from "framer-motion";
import Cv from "../components/Cv";

const SkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BoxContianer
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        exit={{ y: 800, transition: { duration: 0.5 } }}
        transition={{type: "spring", duration: 0.5 }}
      >
        <ParticleComponent theme="light" />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <StartButton />
        <Cv />
        {/* Designer */}
        <MainContianer>
          <Title>
            <SiAntdesign size={30} />
            Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </MainContianer>

        {/* Developer */}
        <MainContianer>
          <Title>
            <FaLaptopCode size={30} /> Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, Sass, React, Redux, React-Native, Node.js, Epress,
              MongoDB, Bootstrap, Firebase etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </MainContianer>
      </BoxContianer>
    </ThemeProvider>
  );
};

export default SkillsPage;

const BoxContianer = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 150vh;
  }
`;

const MainContianer = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  @media (max-width: 768px) {
    margin-top: 10px;
    height: fit-content;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }

  ${MainContianer}:hover {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;

  ${MainContianer}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
