import axios from "axios"
import Session from "./Session";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Sessions(props){

    const {idFilme} =useParams()

    const {footer, setFooter, sala, setSala}=props

    useEffect(()=>{
const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);


requisicao.then(resposta => {
    setSala(resposta.data.days);
    setFooter(resposta.data)
});


},[]);


    return(
    <>
<ContainerSession>
    <h1>Selecione o horário</h1>
        <ul>
        {sala.map((e => <Session key={e.id} weekday={e.weekday} date={e.date}
        name={e.showtimes[0].name} nameOne={e.showtimes[1].name} 
        id={e.showtimes[0].id}
        idOne={e.showtimes[1].id}
        />))}
        </ul>
        
        <Footer title={footer.title} posterURL={footer.posterURL}/>    
        </ContainerSession>
    </>
    )
    }

       const ContainerSession = styled.main`
    display: flex;
    flex-wrap: wrap;
    margin-bottom:117px;
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
        padding-bottom:41px;
    }
    ul{
        margin-left:24px;
    }
`