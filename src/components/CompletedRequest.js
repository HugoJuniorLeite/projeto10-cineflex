import styled from "styled-components"
import { useNavigate} from "react-router-dom";

export default function CompletedRequest(props){

const navigate = useNavigate()
const {footer, name, cpf}=props

function returnMenu(){

    navigate("/")      
}
    return(
    
        <ContainerCompleted>
            <h1>Pedido feito <br></br>com sucesso!</h1>
            <h1>Filme e sessão</h1>
            <span>Filme: {footer.title} </span><br></br>
            <span>{footer.date}</span>           
            
            <h1>Ingressos</h1>
            <span>Assento: </span><br></br>
            <span></span>            

            <h1>Comprador</h1>
            <span>Nome: {name}</span><br></br>
            <span>CPF: {cpf}</span><br></br>

            <button onClick={returnMenu}>Voltar pra Home</button>

        </ContainerCompleted>
    )
    }

const ContainerCompleted = styled.main`
width:100%;
margin-top:67px;
h1{
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align:left;
    padding-top:31px;
    padding-left: 29px;
}
h1:nth-child(1){
    height:110px;
    color:#247A6B;
    text-align:center;
    padding: 31px; 
}
span{
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
    padding-left: 29px;
    padding-left: 29px;
}
button{
        height: 42px;
        width: 225px;
        border-radius: 3px;
        margin-top:62px;
        margin-bottom:147px;
        margin-left:74px;
        background-color:#E8833A;
        color:#FFFFFF;
        font: 400 18px 'Roboto';
        line-height:21.09px;
        border-radius: 3px;
        border: 1px solid #E8833A;
    }
`