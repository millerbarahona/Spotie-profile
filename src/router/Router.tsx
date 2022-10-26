import { BrowserRouter, Route } from 'react-router-dom'
import PrivateGuard from '../guard/privateGuard'
import PublicGuard from '../guard/publicGuard'
import { Artists, Authorization, Login, Profile, Tracks } from '../pages'
import { RoutesWithNotFund } from '../utilities'
import { privateRoutes, publicRoutes } from './routes'

function Router() {
  return (
      <RoutesWithNotFund>
        <Route element={<PublicGuard />}>
          <Route path={publicRoutes.LOGIN} element={<Login />} />
        </Route>
        
          <Route path={privateRoutes.PROFILE} element={<Profile />} />
          <Route path={privateRoutes.ARTISTS} element={<Artists />} />
          <Route path={privateRoutes.TRACKS} element={<Tracks />} />
          <Route path={publicRoutes.AUTH} element={<Authorization />} />
        
    </RoutesWithNotFund>
  )
}

export default Router