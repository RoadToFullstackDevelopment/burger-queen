import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Burger Queen</h1>
            <div><Link to="/login"><button>ENTRAR</button></Link></div>
            <div><Link to="/register"><button>REGISTRAR</button></Link></div>
        </div>
    )
}

export default Main;