import React from 'react';
import { Link } from 'react-router-dom'; 

const Register = () => {
    return (
        <div>
            <h1>Burger Queen</h1>
            <form>
                <label>Email</label>
                <input type="text"/>
                <label>Senha</label>
                <input type="text"/>
                <label>Confirmar senha</label>                
                <input type="text"/>
                <input type="checkbox"/><label>Cozinha</label>
                <input type="checkbox"/><label>Salão</label>
                <button>REGISTRAR</button>
            </form>
            <p>Se você já tem cadastro, <Link to="/login">clique aqui</Link></p>
        </div>
    );
}

export default Register