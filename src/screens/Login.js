import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Burger Queen</h1>
            <form>
                <div><label>Email</label></div>
                <div><input type="text"/></div>
                <div><label>Senha</label></div>
                <div><input type="text"/></div>
                <div>
                    <input type="checkbox"/><label>Cozinha</label>
                    <input type="checkbox"/><label>Salão</label>
                </div>
                <button>ENTRAR</button>
            </form>
            <p>Se você ainda não tem cadastro, <Link to="/register">clique aqui</Link></p>
        </div>
    )
}
export default Login