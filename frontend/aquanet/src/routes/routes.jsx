import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
<<<<<<< HEAD
import {Notificaciones} from '../layouts/Notificaciones'
=======
import { Registro} from '../layouts/Registro'

>>>>>>> 0671234ffb37847c27ee26a99fd475af46b528b0
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
<<<<<<< HEAD
    path:"/Notificaciones2",
    element: <Notificaciones/>,
  },
=======
    path:"/Registro",
    element: <Registro/>,
  }
>>>>>>> 0671234ffb37847c27ee26a99fd475af46b528b0
])

export {routes}
