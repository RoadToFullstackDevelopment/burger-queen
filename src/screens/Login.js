import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Burger Queen</h1>
            <form>
                <label>Email</label>
                <input type="text"/>
                <label>Senha</label>
                <input type="text"/>
                <input type="checkbox"/><label>Cozinha</label>
                <input type="checkbox"/><label>Salão</label>
                <button>ENTRAR</button>
            </form>
            <p>Se você ainda não tem cadastro, <Link to="/register">clique aqui</Link></p>
        </div>
    )
}
export default Login