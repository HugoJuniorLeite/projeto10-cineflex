import styled from "styled-components"

export default function Footer(props){

const{ title, posterURL}=props
    return(
        <ContainerFooter>
        <li>
        <img src={posterURL} alt={title}/>
        <span>{title}</span>
        </li>
        </ContainerFooter>
    )
    }

const ContainerFooter = styled.footer`
position:fixed;
bottom: 0;
left:0;
width: 100%;
height: 117px;
background-color:#DFE6ED;
border: 1px solid #9EADBA;
li{
    display:flex;
    align-items:center;
}
    img{
        width:64px;
        height:89px;
        padding: 8px 8px 8px 8px;
        background-color:#FFFFFF;
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius:3px;
        margin-top: 14px;
    }
    span{
        width: 169px;
        margin-left:22px;
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        color:#293845;
    }   
`