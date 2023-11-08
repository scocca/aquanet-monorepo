import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
import { Registro} from '../layouts/Registro'
import { ConfirmacionRegistro } from '../layouts/ConfirmacionRegistro'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"/Profile",
    element: <Profile/>,
  },
  {
    path:"/Registro",
    element: <Registro/>,
  },
  {
    path:"/ConReg",
    element: <ConfirmacionRegistro/>,
  },
])

export {routes}
