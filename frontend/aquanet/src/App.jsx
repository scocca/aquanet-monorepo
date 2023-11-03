import './App.css'
import { BrowserRouter, Route} from 'react-router-dom';
import Login from '../layouts/Login';
import Profile from '../layouts/Profile';


function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path="/ConReg" component={ConfirmacionRegistro} />
    </BrowserRouter>
  )
}

export {App}
