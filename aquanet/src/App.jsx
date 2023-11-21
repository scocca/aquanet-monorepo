import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from '../layouts/Login';
import {Profile} from '../layouts/Profile';
import {Notificaciones} from '../layouts/Notificaciones';
import {Registro} from '../layouts/Registro';


function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path="/ConReg" component={ConfirmacionRegistro} />
        <Route path="/Notificaciones2" component={Notificaciones} />
        <Route path="/Registro" component={Registro} />
        <Route path="/Login" component={Login} />
    </BrowserRouter>
  )
}

export {App}
