import React from "react";
import '../layouts/Registro.css'
import EnviarCorreo from '../layouts/EnviarCorreo';

const Registro =() =>{

  return (
    <div className="pag">
    <div className="titulo">
    <h1>Registro</h1>
    <form>
      Nombre de usuario:
      <input type="text" />
      Contraseña:
      <input type="text" />
      Mail:
      <input type="text" />
      Soy:
      <select>
          <option>Persona</option>
          <option>Empresa</option>
          <option>ONG</option>
      </select>
      <button>Registrar</button>
    </form>
    </div>
  </div>
  )
}

export {Registro};