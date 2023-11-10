import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
import Blog from '../layouts/Blog'
import { ConfirmacionRegistro } from '../layouts/ConfirmacionRegistro'
import { ONGS } from '../layouts/Ongs'

import {Notificaciones} from '../layouts/Notificaciones'
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
    path:"/Ongs",
    element: <ONGS/>,
  },
  {
    path:"/Notificaciones2",
    element: <Notificaciones/>,
  },
])

export {routes}
