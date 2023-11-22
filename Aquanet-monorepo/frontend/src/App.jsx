import './App.css'
import { BrowserRouter, Route} from 'react-router-dom';
import {Login} from '../layouts/Login';
import {Profile} from '../layouts/Profile';
import {Notificaciones} from '../layouts/Notificaciones';

function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path="/ConReg" component={ConfirmacionRegistro} />
        <Route path="/Notificaciones2" component={Notificaciones} />
    </BrowserRouter>
  )
}

export {App}
