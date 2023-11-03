import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
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
    path:"/Notificaciones2",
    element: <Notificaciones/>,
  },
])

export {routes}
