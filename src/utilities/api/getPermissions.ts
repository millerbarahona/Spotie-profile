import { generateRandomString } from "../randomString"
import { stringify } from 'querystring'

export default function getPermissions() {
  const client_id = import.meta.env.VITE_CLIENT_ID
  const scope = 'user-read-private user-read-email user-library-read user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public'
  const redirect_uri = import.meta.env.VITE_PROD ? 'https://spotie-profile.netlify.app/auth' : 'http://localhost:3000/auth'
  const randomString = generateRandomString(16)
  const url = `https://accounts.spotify.com/authorize?${stringify({
    response_type: 'code',
    client_id,
    scope,
    redirect_uri,
    state: randomString
  })}`

  return url
}