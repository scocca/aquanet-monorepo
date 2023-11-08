import './ConfirmacionRegistro.css'

import { NavBar } from '../components/NavBar'
import { TxtConfReg } from '../components/TxtConfReg'
import { Footer } from '../components/footer';
import regicon from '../assets/Icons/icon _check circle_.png'


const ConfirmacionRegistro =() =>{
    return(
    <div className="TxtConfReg">
      <section className='reg-section'>
      <h1 className='title-reg-main'>Registro</h1>
      <TxtConfReg logoapro={regicon}/>
      </section>
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
    </div>
    )
  }

  export {ConfirmacionRegistro}
