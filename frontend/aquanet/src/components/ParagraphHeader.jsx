import React from 'react'

const ParagraphHeader = () => {
  return (
    <div className="info-container">
      <div className="name-region">
      <h1 className="name-region-p">Región de los Lagos</h1>
            <form className='formBlog'>
              <label for="opcionesRegiones" className='titleformBlog'>Elige una región:</label>
              <select className='opcionesRegiones' name="regiones">
                <option className='opcionesBlog' value="opcion1">La Araucania</option>
                <option className='opcionesBlog' value="opcion2">Coquimbo</option>
                <option className='opcionesBlog' value="opcion3">Valparaíso</option>
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