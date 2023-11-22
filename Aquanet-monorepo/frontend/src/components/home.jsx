import React from "react";
import '../layouts/Registro.css'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Home =()=>{

  const [userName,setUserName] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

const handleSubmit = (e) => {
   e.preventDefault()
   axios.post ('http://localhost:3132/',{userName,password})
   .then(result=> {
        console.log(result)
        if(result.data === "Login correcto"){
           navigate('/profile')
        }
  })
  
   .catch(err=> console.log('err'))
}
    return(
        <div className="container">
            <div className="description">
                <h1 className="title-home">aqua</h1>
                <h1 className="title-2">net</h1>
                <p className="slogan">Agua Limpia comunidades fuertes</p>
                <p className="description-one">En Chile la escasez de agua es un desafío importante, especialmente en el norte y centro. Esto puede generar competencia entre la agricultura y el saneamiento humano por los recursos hídricos.</p>
            </div>
            <form onSubmit= {handleSubmit}>
        <section  className="login-container">
            <div className="login">
                <h2 className="name">aqua</h2>
                <h2 className="name-2">net</h2>
                <div className="login-user">
                <p className='enter'>Ingresa</p>
                <input className="username"  placeholder="Nombre de Usuario" onChange={(e) => setUserName(e.target.value)}/>
                <input className="password" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                <div className="forgot-pass">
                    <p className="forgotPassword">Recuperar contraseña</p>
                </div>
                </div>
                <a><button className="log-in-btn" >Ingresa</button></a>
            </div>
            <p className="sign-in">No tienes cuenta?... <a href="/registro" className="botonaqui3"> Registrate Aqui </a></p>
            </section>
            </form>
        </div>
    )
}

export {Home}