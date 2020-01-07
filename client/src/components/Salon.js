import React from 'react';
import Auth from './Auth';
import { useHistory } from 'react-router';

const Salon = (props) => {
    let history = useHistory();
    return (
        <div>
           <div><h1>Salão</h1></div> 
           <div><button onClick={() => history.push("/breakfast")}>CAFÉ DA MANHÃ</button></div>
           <div><button onClick={() => history.push("/restoftheday")}>RESTO DO DIA</button></div>
           <div><button>PEDIDOS PRONTOS</button></div>
           <div><button onClick={() => {Auth.logout(() => {props.history.push("/")})}}>SAIR</button></div>
        </div>
    )
}

export default Salon