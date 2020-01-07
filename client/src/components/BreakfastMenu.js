import React from 'react'
import { Link } from 'react-router-dom';

const BreakfastMenu = () => {
    return (
        <main>
            <div><h1>Salão</h1></div>
            <div><button><Link to="/salon">VOLTAR PARA A TELA PRINCIPAL</Link></button></div>
        </main>
    )
}
export default BreakfastMenu;