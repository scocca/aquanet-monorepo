import './Login.css';
import generation  from '../assets/Images/generation-logo.svg'
import fEmplea from '../assets/Images/femplea-logo.svg'
import bChile from '../assets/Images/bchile-logo.svg'
import bhp  from '../assets/Images/bhp-logo.svg'

import { NavBar } from '../components/NavBar'
import { Home } from '../components/home'
import { Collaborators } from '../components/collaborators';
import { Footer } from '../components/footer';


const Login =() =>{
    return(
    <div className="Home">
      <NavBar/>
      <Home/>
      <Collaborators generation={generation} femplea = {fEmplea} bchile = {bChile} bhp={bhp}/>
      <Footer/>
    </div>
    )
  }

  export {Login}