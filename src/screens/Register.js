import React from 'react';
import { Link } from 'react-router-dom'; 

const Register = () => {
    return (
        <div>
            <h1>Burger Queen</h1>
            <form>
                <div><label>Email</label></div>
                <div><input type="text"/></div>
                <div><label>Senha</label></div>
                <div><input type="text"/></div>
                <div><label>Confirmar senha</label></div>              
                <div><input type="text"/></div>
                <div>
                    <input type="checkbox"/><label>Cozinha</label>
                    <input type="checkbox"/><label>Salão</label>
                </div>
                <button>REGISTRAR</button>
            </form>
            <p>Se você já tem cadastro, <Link to="/login">clique aqui</Link></p>
        </div>
    );
}

export default Register