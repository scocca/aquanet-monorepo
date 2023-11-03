import './App.css'
import { BrowserRouter, Route} from 'react-router-dom';
import Login from '../layouts/Login';
import Profile from '../layouts/Profile';
import Registro from '../layouts/Registro';


function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path= "/Registro" component={Registro} />
    </BrowserRouter>
  )
}

export {App}
