import styled from "styled-components"

export default function Movie(props){
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
    background-color:#FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius:3px;
    margin-bottom:19px;
    img{
        margin: 8px 8px 8px 8px;
        width:129px;
        height:193px;
    }
    `