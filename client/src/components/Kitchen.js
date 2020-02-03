import React from 'react';
// eslint-disable-next-line
import KitchenOrders from './KitchenOrders';
import { useHistory } from 'react-router';
import Auth from './Auth';

const Kitchen = (props) => {
    let history = useHistory();
    return (
        <div>
           <div><h1>Cozinha</h1></div> 
           <div><button onClick={() => {history.push('/kitchenorders')}}>VER PEDIDOS</button></div>
           <div><button onClick={() => {Auth.logout(() => {props.history.push("/")})}}>SAIR</button></div>
        </div>
    )
}

export default Kitchen