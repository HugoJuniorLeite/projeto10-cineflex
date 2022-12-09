import styled from "styled-components"

export default function Movie(props){

const {posterURL}=props
    return(

        <Container>
        <img src={posterURL} alt="oi"/>
        </Container>   
        
    )
    }

    const Container = styled.li`
    width:145px;
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