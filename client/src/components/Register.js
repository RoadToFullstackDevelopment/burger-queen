import React from 'react';
import Auth from './Auth';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState({
      kitchen: true,
      salon: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, checked)

    const user = {
      email: email,
      password: password,
      cozinha: true,
      salao: true
    }

    axios.post('https://burger-queen-restapi.herokuapp.com/api/users/register', user).then(res => console.log(res.data))
    
    if(checked.kitchen) {
      return Auth.login(() => {props.history.push("/kitchen")})
    }
    else if (checked.salon) {
      return Auth.login(() => {props.history.push("/salon")})
    }
  }

  const handleChange = (evt) => {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setChecked({...checked, [evt.target.name]: value});
  }

  return (
    <main>
      <div><h1>Burger Queen</h1></div>
      <form onSubmit={handleSubmit}>
        <div><label>EMAIL</label></div>
        <div><input type="email" value={email} onChange={e => setEmail(e.target.value)}/></div>
        <div><label>SENHA</label></div>
        <div><input type="password" value={password} onChange={e => setPassword(e.target.value)}/></div>
        <div><label>REPETIR SENHA</label></div>
        <div><input type="password" value={password} onChange={e => setPassword(e.target.value)}/></div>
        <div>
          <input type="checkbox" name="kitchen" checked={checked.kitchen} onChange={handleChange}/> COZINHA
          <input type="checkbox" name="salon" checked={checked.salon} onChange={handleChange}/> SALÃO
        </div>
        <button type="submit">REGISTRAR</button>
      </form>
      <h3>Se você já tem cadastro, <Link to="/login">clique aqui</Link></h3>
    </main>
  )
}

export default Register;