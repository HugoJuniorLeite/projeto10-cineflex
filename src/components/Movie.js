import styled from "styled-components"
//import {Link, useParams } from "react-router-dom";

export default function Movie(props){
//const {idFilme} =useParams()
const {posterURL, title}=props
    return(

        <Container>
        
        <img src={posterURL} alt={title}/>
        
        </Container>   
        
    )
    }

    const Container = styled.li`
    width:100%;
    height:209px;
    display: flex;
    flex-wrap: wrap;
    background-color:red;
    border-radius:3px;
    margin-bottom:19px;
    img{
        margin: 8px 8px 8px 8px;
        width:129px;
        height:193px;
    }
    
    `