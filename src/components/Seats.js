import axios from "axios"
import { useEffect, useState } from "react"
import Seat from "./Seat";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Seats(props) {
    
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    const { idSessao } = useParams()
    const {name,setName, cpf, setCpf, ids, setIds}=props
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then(resposta => {
            setSeats(resposta.data.seats)
        })
    }, [idSessao])
    
    function handleSubmit(e) {
        e.preventDefault();
        const buy = { ids, name, cpf }
        console.log(buy, "fomr")
        const url_post = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        const requisicao = axios.post(url_post, buy)
        requisicao.then(resposta => {
            navigate("/sucesso")
            console.log(resposta.data, "resposta")
        })
    }
  //Faz o click em cada componente Seat
  function handleSeat(seat) {
    //Se o assento estiver indisponível não faz nada
    if (seat.isAvailable === false) {
        alert("Esse assento não está disponível")
      return;
    }
    //Toggle - "Liga e desliga" a seleção
    seat.selected = !seat.selected;
    //Se o estado atual é não selecionado precisamos remover o assento
    if (!seat.selected) {
      const filteredSeats = selectedSeats.filter((s) => !(s.name === seat.name));
      setSelectedSeats([...filteredSeats]);
      //const filteredIds = ids.filter((s) => !(s.id === seat.id));
      //setIds([...filteredId])
      return;
    }
    //Adicionamos o assento a lista de assentos selecionados
    setSelectedSeats([...selectedSeats, seat]);
    //const id =selectedSeats.map((e => e.id));
    
    //setIds([...id])
    return;
}
console.log(selectedSeats,"teste")

    return (
        <>
            
            {seats.map((seat, id) => (<Seat key={id} seat={seat} handleSeat={handleSeat} />))}
            
            <form onSubmit={handleSubmit}>
                <label> Escreva seu nome:
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    >
                    </input>
                </label>

                <label> Digite seu CPF:
                    <input
                        id="cpf"
                        type="text"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        required>
                    </input>
                </label>
                <button type="submit">Reservar assento(s)</button>
            </form>
        </>
    )
}

const Button = styled.button`
    width:26px;
    height:25px;
    margin: 8px 13px 0 0;
    border-radius:12px;
    border: 1px solid #808F9D;    
    label{
        display:block;
        width:100%;
    }
    `