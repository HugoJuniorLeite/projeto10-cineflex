//import { useState } from "react"
//import styled from "styled-components"

import styled from "styled-components";

export default function Seat({ seat, handleSeat }) {
    return (
      <Container>
        {!seat.selected ? ( 
          <div className={`seat ${seat.isAvailable}`}
           onClick={() => handleSeat(seat)}>
            {seat.name}
          </div>
        ) : (
          <div className={`seat selected`} onClick={() => handleSeat(seat)}>
            {seat.name}
          </div>
        )}
      </Container>
    );
  }
  
  
  const Container =styled.button`

    width:26px;
    height:25px;
    margin: 8px 13px 0 0;
    border-radius:12px;
    border: 1px solid #808F9D;    
.selected {
  background-color: lightgreen;
}
.true {
  background-color: lightgrey;
}

.false {
  background-color: lightcoral;
}

  `