import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar.js'
import { Home } from './components/home.js'
import { Footer } from './components/footer';


const Login =() =>{
    return(
      <div className="Home">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
    )
  }

  export {Login}