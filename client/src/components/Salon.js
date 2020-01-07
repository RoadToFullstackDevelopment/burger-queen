import React from 'react';
import Auth from './Auth';
import BreakfastMenu from './BreakfastMenu';
import RestOfTheDayMenu from './RestOfTheDayMenu';
import { Link } from 'react-router-dom';

const Salon = (props) => {
    return (
        <div>
           <div><h1>Salão</h1></div> 
           <div><button><Link to="/breakfast">CAFÉ DA MANHÃ</Link></button></div>
           <div><button><Link to="/restoftheday">RESTO DO DIA</Link></button></div>
           <div><button>PEDIDOS PRONTOS</button></div>
           <div><button onClick={() => {Auth.logout(() => {props.history.push("/")})}}>SAIR</button></div>
        </div>
    )
}

export default Salon