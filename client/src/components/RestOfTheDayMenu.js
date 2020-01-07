import React from 'react'
import { useHistory } from 'react-router-dom';

const RestOfTheDayMenu = () => {
    let history = useHistory()
    return (
        <main>
            <div><h1>Salão</h1></div>
            <div><button onClick={() => history.push("/salon")}>VOLTAR PARA A TELA PRINCIPAL</button></div>
        </main>
    )
}
export default RestOfTheDayMenu;