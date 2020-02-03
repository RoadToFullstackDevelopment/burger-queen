import React from 'react';
import { useHistory } from 'react-router';

const KitchenOrders = () => {
    let history = useHistory();
    return (
        <main>
            <h1>Cozinha</h1>
            <div><button className="btn" onClick={() => {history.push("/kitchen")}}>VOLTAR PARA A TELA PRINCIPAL</button></div>
        </main>
    )
}

export default KitchenOrders;