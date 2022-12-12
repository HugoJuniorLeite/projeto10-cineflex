import Movie from "./Movie";
import { useEffect, useState } from "react"
import axios from "axios"
import {Link, /*useParams*/ } from "react-router-dom";
import styled from "styled-components";

export default function Movies(){

    const [title, setTitle]=useState([])
//    const {idFilme} =useParams()


    useEffect(()=>{
const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

requisicao.then(resposta => {
    setTitle(resposta.data);
});


},[]);

    return(
        <>
        
        
        <ContainerMain> 
        <h1>Selecione o filme</h1>
        {title.map((item =>
            <Link to={`/sessoes/${item.id}`}>
            <Movie key={item.id} title={item.title} posterURL={item.posterURL} id={item.id}/>
        </Link>
            ))}
        </ContainerMain>
        </>
    )
    }
    
    const ContainerMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    h1{   
        width:100%;
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        padding-top:41px;
        padding-bottom:41px;
    }
`