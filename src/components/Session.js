import { Link, useParams } from "react-router-dom";
import styled from "styled-components";



export default function Session(props){

    const {weekday, date, name, nameOne, id, idOne} =props
    
    return(
    
        <Containersession>
           <span>{`${weekday} - ${date} `}</span>
            <div>
                <span>
                   <Link to={`/assentos/${id}`}> <button >{name}</button></Link>
                   <Link to={`/assentos/${idOne}`}><button >{nameOne}</button> </Link> 
                </span>
            </div>  
        </Containersession>
    )
    }

    const Containersession =styled.li`
    span{
        color:#293845;
        font:400 20px 'Roboto';
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: left;
    }
        button{
        height: 43px;
        width: 83px;
        margin: 22px 8px 23px 0;
        background-color:#E8833A;
        color:#FFFFFF;
        font: 400 18px 'Roboto';
        line-height:21.09px;
        border-radius: 3px;
        border: 1px solid #E8833A;
    }
    `



    