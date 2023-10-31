import React from 'react';
import './App.css';
import generation  from './assets/generation-logo.svg'
import fEmplea from './assets/femplea-logo.svg'
import bChile from './assets/bchile-logo.svg'
import bhp  from './assets/bhp-logo.svg'

import { NavBar } from './components/NavBar.js'
import { Home } from './components/home.js'
import { Collaborators } from './components/collaborators.js';
import { Footer } from './components/footer';


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