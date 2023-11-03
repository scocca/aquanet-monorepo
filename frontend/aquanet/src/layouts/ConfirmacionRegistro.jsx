import './ConfirmacionRegistro.css'

import { NavBar } from '../components/NavBar'
import { TxtConfReg } from '../components/TxtConfReg'
import { Footer } from '../components/footer';
import Regicon from '../assets/Icons/🦆 icon _check circle_.png'


const ConfirmacionRegistro =() =>{
    return(
    <div className="TxtConfReg">
      <NavBar/>
      <TxtConfReg/>
      <Footer/>
    </div>
    )
  }

  export {ConfirmacionRegistro}
