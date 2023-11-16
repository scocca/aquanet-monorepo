import React, { useState } from 'react'

const ParagraphHeader = () => {
  const [regionValor, setregionValor] = useState("");

  const handleRegion = (e) => {
    console.log(e.target.value);
    setregionValor(e.target.value)
  }


  




  return (
    <div className="info-container">
      <div className="name-region">
      <h1 className="name-region-p">Región de los Lagos</h1>
            <form className='formBlog'>
              <label for="opcionesRegiones" className='titleformBlog'></label>
              <select className='opcionesRegiones' name="regiones" onChange={handleRegion}>
                <option className='opcionesBlog' value="Araucania">Araucania</option>
                <option className='opcionesBlog' value="Coquimbo">Coquimbo</option>
                <option className='opcionesBlog' value="Valparaiso">Valparaíso</option>
              </select>
            </form>
            
            
        </div>
        <div>
            <div className="info-region-container">
                <p className="info-region">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis odio, ipsum voluptates non temporibus! Ipsum provident maxime, libero totam corrupti adipisci aspernatur! Impedit ad veritatis praesentium, deleniti recusandae voluptatum?</p>
            </div>
        </div>

    </div>
  )
}

export {ParagraphHeader}