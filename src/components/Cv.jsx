import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import styled from 'styled-components'
import { DarkTheme } from "../utils/Theme";


const Box = styled.a`
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding:0 2rem ;

  color:inherit ;

  @media (max-width: 765px){
      padding:0 ;
  }
`;
const Cv = (props) => {

  return (
    <Box href="/Kontaktdaten-de.pdf" download={'Lebenslauf'} title="Laden Lebenslauf herunter">
      <VscFilePdf size={30}  color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
    </Box>
  );
};

export default Cv;
