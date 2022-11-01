import { Route } from 'react-router-dom'
import PublicGuard from '../guard/publicGuard'
import { Artists, Authorization, Login, Profile, Tracks, TrackDetails, Playlists, PlaylistDetail, ArtistDetail } from '../pages'
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
          <Route path={privateRoutes.ARTIST} element={<ArtistDetail />} />
          <Route path={privateRoutes.TRACKS} element={<Tracks />} />
          <Route path={privateRoutes.TRACK} element={<TrackDetails />} />
          <Route path={privateRoutes.PLAYLISTS} element={<Playlists />} />
          <Route path={privateRoutes.PLAYLIST} element={<PlaylistDetail />} />
          <Route path={publicRoutes.AUTH} element={<Authorization />} />
        
    </RoutesWithNotFund>
  )
}

export default Router