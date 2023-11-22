import './App.css'
import { BrowserRouter, Route} from 'react-router-dom';
<<<<<<< HEAD
import {Login} from '../layouts/Login';
import {Profile} from '../layouts/Profile';
import {Notificaciones} from '../layouts/Notificaciones';
=======
import Login from '../layouts/Login';
import Profile from '../layouts/Profile';
import Registro from '../layouts/Registro';

>>>>>>> 0671234ffb37847c27ee26a99fd475af46b528b0

function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Profile" component={Profile} />
<<<<<<< HEAD
        <Route path="/Notificaciones2" component={Notificaciones} />
=======
        <Route path= "/Registro" component={Registro} />
>>>>>>> 0671234ffb37847c27ee26a99fd475af46b528b0
    </BrowserRouter>
  )
}

export {App}
