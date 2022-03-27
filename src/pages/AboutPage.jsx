import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "../utils/Theme";

import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import StartButton from "../components/StartButton";
import ParticleComponent from "../components/ParticleComponent";
import BigTitle from "../components/BigTitle";
import spaceman from "../assets/spaceman.png";
import { motion } from "framer-motion";
import Cv from "../components/Cv";

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        exit={{  y: 800, transition: { duration: 0.5 } }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <StartButton theme="dark" />
        <Cv theme="dark"/>
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={spaceman} alt="spaceman" />
        </Spaceman>
        <Main>
          Full-Stack Web Entwickler mit mehr als 7 Jahren Berufserfahrung in der
          Buchhaltung.
          <br /> <br />
          Derzeit bin ich auf der Suche nach einer Vollzeitanstellung im Bereich
          der Webentwicklung und für neue Herausforderungen bereit. Ein hohes
          Maß an Professionalität und Flexibilität sind mir wichtig. Ich habe
          die Fähigkeit, mir Programmiersysteme bzw. sprachen autodidaktisch zu
          erschließen.
          <br />
          <br />
          Derzeit trainiere ich in PHP, Laravel, Angular und WordPress.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
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
    left: calc(3.5rem + 2vw);
  }
`;
