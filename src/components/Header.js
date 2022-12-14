import styled from "styled-components"

export default function Header(){

    return(
        <HeaderCss>
            CINEFLEX
        </HeaderCss>
    )
    }

    const HeaderCss =styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:67px;
    background-color:#C3CFD9;
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color:#E8833A;
    padding-top:16.5px;
    `

