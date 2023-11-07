import React from 'react'
import flecha from '../assets/Images/flecha.svg'

const LinksBox = () => {
  return (
    <>
    <div className="list-links-left">
        <ul className="ul-links">
            <li className="links-li">
                <a target='blank' href='https://snia.mop.gob.cl/BNAConsultas/reportes'>Estadística Hidrológica</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
            <li className="links-li">
                <a target='blank' href='https://www.desarrollosocialyfamilia.gob.cl/programas-sociales/familias/subsidio-al-pago-del-consumo-de-agua-potable-y-servicio-de-alcantarillado-de-aguas-servidas-sap#:~:text=El%20SAP%20es%20un%20apoyo%20econ%C3%B3mico%20para%20familias,85%25%20dependiendo%20del%20nivel%20socioecon%C3%B3mico%20de%20las%20familias.'>Subsidios</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
            <li className="links-li">
                <a target='blank' href='https://www.mop.gob.cl/'>Dirección de obras hidráulicas</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
        </ul>

    </div>

    <div className="list-links-right">
        <ul className="ul-links">
            <li className="links-li">
                <a target='blank' href='https://donacionesley21440.cl/guias-y-preguntas-frecuentes'>Ley de Donaciones</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
            <li className="links-li">
                <a target='blank' href='https://doh.mop.gob.cl/SSR/index.html#manuales'>Servicios Sanitarios</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
            <li className="links-li">
                <a target='blank' href='https://escenarioshidricos.cl/eh-2030-en-la-prensa/lo-que-viene-este-ano-en-materia-de-recursos-hidricos-informes-de-la-mesa-del-agua-proyectos-e-implementacion-de-leyes-y-hojas-de-ruta-para-algunas-cuencas/'>Proyectos estatales</a>
                <span className='flecha'><img src={flecha} alt='flecha' /></span>
                </li>
        </ul>

    </div>
    </>
  )
}

export {LinksBox}
