import { BrowserRouter, Route } from 'react-router-dom'
import PrivateGuard from '../guard/privateGuard'
import PublicGuard from '../guard/publicGuard'
import { Authorization, Login, Profile } from '../pages'
import RoutesWithNotFount from '../utilities/routes-with-not-fund'
import { privateRoutes, publicRoutes } from './routes'

function Router() {
  return (
    <BrowserRouter>
      <RoutesWithNotFount>
        <Route element={<PublicGuard />}>
          <Route path={publicRoutes.LOGIN} element={<Login />} />
        </Route>
        
          <Route path={privateRoutes.PROFILE} element={<Profile />} />
          <Route path={publicRoutes.AUTH} element={<Authorization />} />
        
    </RoutesWithNotFount>
    </BrowserRouter >
  )
}

export default Router