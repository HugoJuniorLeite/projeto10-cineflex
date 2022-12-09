import axios from "axios"
import Session from "./Session";
import { useEffect, useState } from "react"
//import { useParams } from "react-router-dom";

export default function Sessions(){

    const [sala, setSala]=useState([])
  //  const params =useParams()


    useEffect(()=>{
const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes");

requisicao.then(resposta => {
    setSala(resposta.data.days);
});

console.log(requisicao)
},[]);

console.log(sala,"title")


    return(
    
        <ul>
        {sala.map(e => <Session weekday={e.weekday} date={e.date} name={e.showtimes[0].name} nameOne={e.showtimes[1].name} id={e.showtimes.id}/>)}
        </ul>

    )
    }
    