import styled from "styled-components"

export default function Footer(props){

const{ title, posterURL}=props
    return(
        <ContainerFooter>
        <img src={posterURL}/>
        <span>{title}</span>
        </ContainerFooter>
    )
    }

const ContainerFooter = styled.li`
width: 100%;
height: 117px;
background-color:#DFE6ED;
border: 1px solid #9EADBA;
    img{   
        width:48px;
        height:72px;
    }   
`