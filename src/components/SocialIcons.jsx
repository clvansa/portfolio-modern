import styled from "styled-components";
import { DarkTheme } from "../utils/Theme";
import { motion } from "framer-motion";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import { VscFilePdf } from "react-icons/vsc";


const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 3rem;
  z-index: 3;
  @media (max-width: 765px) {
    left: 1rem;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Link = styled.a`
 & > *{
  transition: all 0.5s ease;
 }
  & > *:hover {
    transform: scale(1.2);
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color == "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link href={"https://github.com/clvansa/"} target="_blank">
          <AiOutlineGithub
            size={30}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <Link
          href={"https://www.linkedin.com/in/majd-makkieh-6737a761/"}
          target="_blank"
        >
          <AiOutlineLinkedin
            size={30}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <Link href={"mailto:info@clvansa.com"} target="_blank">
          <AiOutlineMail
            size={30}
            color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>

    

      <Line
        color={props.theme}
        initial={{ transform: "translateY(20px)" }}
        animate={{ translateY: [200, -10, 0] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      />
    </Icons>
  );
};

export default SocialIcons;
