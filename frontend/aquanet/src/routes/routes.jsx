import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
import Blog from '../layouts/Blog'
import { ConfirmacionRegistro } from '../layouts/ConfirmacionRegistro'
<<<<<<< HEAD
import { ONGS } from '../layouts/Ongs'

import {Notificaciones} from '../layouts/Notificaciones'
=======
import { Registro } from '../layouts/Registro'
>>>>>>> samuel
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
<<<<<<< HEAD
    path:"/Ongs",
    element: <ONGS/>,
  },
  {
    path:"/Notificaciones2",
    element: <Notificaciones/>,
=======
    path:"/registro",
    element: <Registro/>,
>>>>>>> samuel
  },
])

export {routes}
