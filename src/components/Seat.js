//import { useState } from "react"
//import styled from "styled-components"

import styled from "styled-components";

export default function Seat({ seat, handleSeat }) {
    return (
      <Container item={seat.selected}
           onClick={() => handleSeat(seat)}>
            {seat.name}
      </Container>

    );
  }
  
  
  const Container =styled.button`

    width:26px;
    height:25px;
    margin: 8px 13px 0 0;
    border-radius:12px;
    border: 1px solid ${props => props.item === true? "#0E7D71" : "#7B8B99" };    
    background-color: ${props => props.item === true? "#1AAE9E" : "#C3CFD9" };
  `