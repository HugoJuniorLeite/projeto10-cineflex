import { useEffect, useState } from "react"
import axios from "axios"

export default function Sessions(){

    const [title, setTitle]=useState([])


    useEffect(()=>{
const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

requisicao.then(resposta => {
    setTitle(resposta.data);
});

console.log(requisicao)
},[]);

console.log(title,"title")


    return(
    
        <ul>
        {title.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>

    )
    }