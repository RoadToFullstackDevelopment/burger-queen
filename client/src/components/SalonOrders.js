import React from 'react'
import { useHistory } from 'react-router';

const SalonOrders = () => {
    let history = useHistory();
    return (
        <div>
            <div><h1>Salão</h1></div>
           <div><button className="btn" onClick={() => {history.push("/menu")}}>VOLTAR PARA MENU</button></div>
        </div>
    )
}

export default SalonOrders