import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div><h1>Burger Queen</h1></div>
            <form>
               <div>
                   <div><label>EMAIL</label></div>
                   <div><input type="email"/></div>
                   <div><label>SENHA</label></div>
                   <div><input type="password"/></div>
                   <div>
                       <input type="checkbox" /> COZINHA
                       <input type="checkbox" /> SALÃO
                   </div>
               </div>
               <button>REGISTRAR</button>
            </form> 
            <h3>Se você ainda não tem cadastro, <Link to="/register">clique aqui</Link></h3>
        </div>
    )
}

export default Login;