import styled from "styled-components";

export default function Seat(props) {
  const {seat, handleSeat} = props
  
    return (
      <Container item={seat.selected} isAvailable={seat.isAvailable}
           onClick={() => handleSeat(seat)}>
            {seat.name}
      </Container>

    );
  }
  
  const Container =styled.button`

    width:26px;
    height:26px;
    margin: 13px 7px 0 0;
    border-radius:12px;
    border: 1px solid ${props => props.isAvailable ===false? "#F7C52B" 
    : props.item === true? "#0E7D71" : "#7B8B99" };    
    background-color: ${props => props.isAvailable ===false? "#FBE192" 
    : props.item === true? "#1AAE9E" : "#C3CFD9" };
    font: 400 11px 'Roboto';
  `