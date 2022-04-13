import React, { useRef, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../utils/Theme";
import { FaYinYang } from "react-icons/fa";

import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import StartButton from "../components/StartButton";
import Card from "../components/Card";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";
import Cv from "../components/Cv";
import axios from "axios";

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [work, setWork] = useState([]);

  const fetchWork = async () => {
    const res = await axios.get("http://localhost:3210/api/projects/");
    console.log("test");
    console.log(res.data);
    setWork(res.data)
  };
  useEffect(() => {
    fetchWork();
  }, []);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        exit={{ opacity: 0, x: -800, transition: { duration: 0.5 } }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <BigTitle text="WORK" top="10%" right="20%" />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <StartButton theme="dark" />
        <Cv theme="dark" />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {work && work?.map((work) => <Card work={work} key={work.id} />)}
        </Main>

        <Rotate ref={yinyang}>
          <FaYinYang size={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 350vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 11rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  @media (max-width: 768px) {
    top: 10rem;
  }
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 1.5,
    },
  },
};
