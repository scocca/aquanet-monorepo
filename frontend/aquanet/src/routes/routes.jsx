import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
import Blog from '../layouts/Blog'
import { ConfirmacionRegistro } from '../layouts/ConfirmacionRegistro'
import { Registro } from '../layouts/Registro'
import { ONGS } from '../layouts/Ongs'
import { Notificaciones } from '../layouts/Notificaciones'

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
    path:"/blog",
    element: <Blog/>,
  },
  {
    path:"/ConReg",
    element: <ConfirmacionRegistro/>,
  },
  {
    path:"/registro",
    element: <Registro/>,
  },
  {
    path:"/ongs",
    element: <ONGS/>,
  },
  {
    path:"/notificaciones",
    element:<Notificaciones/>
  }
])

export {routes}
