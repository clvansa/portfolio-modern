import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme } from "../utils/Theme";

const Logo = styled.h1`
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  display: inline-block;
  /* font-family: "Pacifico", cursive; */
  font-size: 2.5rem;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 765px) {
    font-size: 2rem;
  }
`;

const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo color={props.theme}>MK</Logo>
    </NavLink>
  );
};

export default LogoComponent;
