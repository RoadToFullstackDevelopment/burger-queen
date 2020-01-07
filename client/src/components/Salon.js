import React from 'react';
import Auth from './Auth';

const Salon = (props) => {
    return (
        <div>
           <div><h1>Salão</h1></div> 
           <div><button>CAFÉ DA MANHÃ</button></div>
           <div><button>RESTO DO DIA</button></div>
           <div><button>PEDIDOS PRONTOS</button></div>
           <div><button onClick={() => {Auth.logout(() => {props.history.push("/")})}}>SAIR</button></div>
        </div>
    )
}

export default Salon