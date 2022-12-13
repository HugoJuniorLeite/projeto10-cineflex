import axios from "axios"
import Session from "./Session";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Sessions(){

    const [sala, setSala]=useState([])
    const {idFilme} =useParams()
    const [footer,setFooter]=useState([])

    useEffect(()=>{
const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);


requisicao.then(resposta => {
    setSala(resposta.data.days);
    setFooter(resposta.data)
});


},[]);


    return(
    <>
        <ul>
        {sala.map((e => <Session key={e.id} weekday={e.weekday} date={e.date}
        name={e.showtimes[0].name} nameOne={e.showtimes[1].name} 
        id={e.showtimes[0].id}
        idOne={e.showtimes[1].id}
        />))}
        </ul>
        
        <Footer title={footer.title} posterURL={footer.posterURL}/>    
    </>
    )
    }

    