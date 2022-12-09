import Movie from "./Movie";
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Movies(){

    const [title, setTitle]=useState([])
    const params =useParams()


    useEffect(()=>{
const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

requisicao.then(resposta => {
    setTitle(resposta.data);
});


},[]);

    return(
        <>
        <div>Selecione o filme</div>
        <ContainerMain> 
        {title.map((item => <Movie key={item.id} title={item.title} posterURL={item.posterURL} id={item.id}/>))}
        </ContainerMain>
        </>
    )
    }
    
    const ContainerMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`