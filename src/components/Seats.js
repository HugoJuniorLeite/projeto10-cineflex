import axios from "axios"
import { useEffect, useState } from "react"
import Seat from "./Seat";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Seats(props) {
    
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    const { idSessao } = useParams()
    const {name,setName, cpf, setCpf}=props
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then(resposta => {
            setSeats(resposta.data.seats)
            
        })
    }, [idSessao])
    
    function handleSubmit(e) {
        e.preventDefault();
        if(selectedSeats.length ===0){
            alert("Ops, esqueceu de escolher um assento, escolha seu assento e em seguida click em reservar assento")
        }
        if( selectedSeats.length !==0){
        const buy = { ids:selectedSeats, name, cpf }
       
        const url_post = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        const requisicao = axios.post(url_post, buy)
        requisicao.then(resposta => {
            navigate("/sucesso")         
        })
    }
    }
  function handleSeat(seat) {

    if (seat.isAvailable === false) {
        alert("ascento ocupado")
      return;
    }
    seat.selected = !seat.selected;

    if (!seat.selected) {
      const filteredSeats = selectedSeats.filter((s) => !(s=== seat.id));
      setSelectedSeats([...filteredSeats]);
      return;
    }

    setSelectedSeats([...selectedSeats, seat.id]);

    return;
}

    return (
        <>
         <ContainerSeats>   
            <h1>Selecione o(s) assento(s)</h1>
            <ul>
            {seats.map((seat, id) => (<Seat key={id} seat={seat} handleSeat={handleSeat} />))}
            
            <ButtonLegend>
                <figure>
                <Selecionado></Selecionado>
                <figcaption>Selecionado</figcaption>
                </figure>

                <figure>
                <Disponivel></Disponivel>
                <figcaption>Disponível</figcaption>
                </figure>

                <figure>
                <Indisponivel></Indisponivel>
                <figcaption>Indisponível</figcaption>
                </figure>

            </ButtonLegend>
            </ul>

            <form onSubmit={handleSubmit}>
                <label> Escreva seu nome:
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Digite seu nome..."
                        required
                    >
                    </input>
                </label>

                <label> Digite seu CPF:
                    <input
                        id="cpf"
                        type="number"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        placeholder="Digite seu CPF..."
                        required>
                    </input>
                </label>
                <button type="submit">Reservar assento(s)</button>
            </form>
            </ContainerSeats>
            <Footer/>
        </>
    )
}

const ContainerSeats = styled.main`
    margin-top: 67px;
    h1{   
        width:100%;
        font-family: 'Roboto';
        color:#293845;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        padding-top:41px;
        padding-bottom:22px;
    }
    ul{
        margin-left:24px;
        margin-right:11px;
    }
    form{
        margin-left:24px;
        margin-right:24px;
    }
    label{
        display:flex;
        flex-direction:column;
        width:100%;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
    }
    input{
        width:327px;
        height:51px;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
    }
    ::placeholder{
        font-family: 'Roboto';
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color:#AFAFAF;
    }
    form button{
        height: 42px;
        width: 225px;
        border-radius: 3px;
        margin-top:57px;
        margin-bottom:147px;
        background-color:#E8833A;
        color:#FFFFFF;
        font: 400 18px 'Roboto';
        line-height:21.09px;
        border-radius: 3px;
        border: 1px solid #E8833A;
    }
    `
    const ButtonLegend = styled.li`
    display:flex;
    justify-content:space-around;
    margin-top:16px;
    margin-bottom:41px;
    div{
        display:flex;
        flex-direction:column
    }
    figcaption {
margin-top:5px;
    margin-left:-25px;
}
    `
    const Selecionado = styled.p`
        width:26px;
        height:26px;
        border-radius:12px;
        background-color:#1AAE9E;
        border: 1px solid #0E7D71;
    `   
    const Disponivel = styled.p`
        width:26px;
        height:26px;
        border-radius:12px;
        background-color:#C3CFD9;
        border: 1px solid #7B8B99;
    `
    const Indisponivel = styled.p`
        width:26px;
        height:26px;
        border-radius:12px;
        background-color:#FBE192;
        border: 1px solid #F7C52B;
    `