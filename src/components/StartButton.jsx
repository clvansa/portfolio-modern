import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { DarkTheme } from "../utils/Theme";

const Button = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${DarkTheme.text};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 3;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 6px ${props => props.theme === "dark" ? "rgba(240, 34, 34, 0.685)":"rgba(14, 13, 12, 0.255)"};
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const StartButton = (props) => {
  return (
    <Button color={props.theme}>
      <NavLink to={"/"}>
        <FaPowerOff size={28} fontWeight="bold" />
      </NavLink>
    </Button>
  );
};

export default StartButton;
