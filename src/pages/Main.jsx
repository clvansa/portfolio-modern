import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import StartButton from "../components/StartButton";
import { FaYinYang } from "react-icons/fa";
import Intro from "../components/Intro";
import MotionCompnent from "../components/MotionCompnent";
import useWindowSize from "../utils/useWindowSize";
import Cv from "../components/Cv";

const Main = () => {
  const [click, setClick] = useState(false);
  const [iconSize, setIconSize] = useState(300);
  const [mobileSize, setMobileSize] = useState(false);
  const { width } = useWindowSize();

  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  useEffect(() => {
    if (width < 765) {
      setIconSize(100);
      setMobileSize(true);
    } else {
      setIconSize(300);
      setMobileSize(false);
    }
  }, [width]);

  return (
    <MainContainer>
      <Container>
        <LogoComponent theme={click ? "dark" : "light"} />
        <StartButton />
        <Cv />
        {click && <Intro />}
        <SocialIcons theme={click ? "dark" : "light"} />
        <DarkSide click={click} />
        <Center click={click}>
          <FaYinYang size={click ? 100 : iconSize} onClick={handleClick} />
          <ClickHere  onClick={handleClick} >Click Hier</ClickHere>
        </Center>
        <Contact to={"/contact"} mobilesize={mobileSize}>
          <MotionCompnent y={-200} text="Contact" />
        </Contact>

        <Work to={"/Work"} click={click} mobilesize={mobileSize}>
          <MotionCompnent y={-200} text="Work" />
        </Work>

        <BottomBar>
          <About to={"/About"} click={click}>
            <MotionCompnent y={200} text="About" />
          </About>

          <Skills to={"/Skills"} >
            <MotionCompnent y={200} text="My Skills" />
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1s linear;
  }
  & > :last-child {
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "block")};
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: ${(props) => (props.mobilesize ? "0rem" : "calc(1rem + 1vw)")};
  transform: translateY(-50%) rotate(90deg);
  text-decoration: none;
  z-index: 3;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: ${(props) => (props.mobilesize ? "0rem" : "calc(1rem + 1vw)")};
  transform: translateY(-50%) rotate(-90deg);
  text-decoration: none;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 765px) {
    font-size: 10px;
  }

 
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 3;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 3;
`;

const DarkSide = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 0;
  background-color: #000000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;


const ClickHere = styled.span`
  font-weight:600 ;
`