import React from 'react';
import Auth from './Auth';

const Kitchen = (props) => {
    return (
        <div>
           <div><h1>Cozinha</h1></div> 
           <div><button>VER PEDIDOS</button></div>
           <div><button onClick={() => {Auth.logout(() => {props.history.push("/")})}}>SAIR</button></div>
        </div>
    )
}

export default Kitchen