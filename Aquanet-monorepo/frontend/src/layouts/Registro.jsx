import React from "react";
import '../layouts/Registro.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registro =() =>{

  const [userName,setUserName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

const handleSubmit = (e) => {
   e.preventDefault()
   axios.post ('http://localhost:2727/registro',{userName,email,password})
   .then(result=> {console.log(result)
    navigate('/conreg')
  })
  
   .catch(err=> console.log(err))
}

  return (
    <div className="pag">
    <div className="titulo-register">
    <h1>Registro</h1>
    <form onSubmit= {handleSubmit} >
    <section className="register-container">
      <p className="usuario-register">
        Nombre de usuario: </p>
      <input className='register-input' type="text" placeholder="Nombre de ususario" onChange={(e) => setUserName(e.target.value)}/>
      <p className="password-register">
      Contraseña:
      </p>
      <input className='register-input' type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      <p className="mail-register">
        Mail:
      </p>
      <input className='register-input' type="email" placeholder="Mail" onChange={(e) => setEmail(e.target.value)}/>
      <p className="type-register">
      Soy:
      </p>
      <select className="register-select" placeholder="seleccione una opcion" >
          <option>Persona</option>
          <option>Empresa</option>
          <option>ONG</option>
      </select>
      <section className='watermark-reg'>
        <div className='watermark-reg-container'>
          <p className='watermark-p'>
            2023
          </p>
          <p className='watermark-link'>
             AquaNet.cl
          </p>
        </div>
      </section>
      <a ><button className="register-btn">Registrar</button></a>
      </section>
      </form>
    </div>
  </div>
  )
}

export {Registro};