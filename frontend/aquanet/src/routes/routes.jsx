import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../layouts/Login'
import { Profile } from '../layouts/Profile'
import Blog from '../layouts/Blog'
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
    path:"/blog",
    element: <Blog/>,
  },
  {
    path:"/ConReg",
    element: <ConfirmacionRegistro/>,
  },
])

export {routes}
