import React from "react";
import '../layouts/Registro.css'


const Registro =() =>{

  return (
    <div className="pag">
    <div className="titulo-register">
    <h1>Registro</h1>
    <section className="register-container">
      <p className="usuario-register">
        Nombre de usuario: </p>
      <input className='register-input' type="text" placeholder="Nombre de ususario" />
      <p className="password-register">
      Contraseña:
      </p>
      <input className='register-input' type="text" placeholder="Contraseña"/>
      <p className="mail-register">
        Mail:
      </p>
      <input className='register-input' type="text" placeholder="Mail"/>
      <p className="type-register">
      Soy:
      </p>
     {/* <select className="register-select" placeholder="seleccione una opcion" >
          <option>Persona</option>
          <option>Empresa</option>
          <option>ONG</option>
      </select> */}
      <button className="register-btn">Registrar</button>
      </section>
    </div>
  </div>
  )
}

export {Registro};