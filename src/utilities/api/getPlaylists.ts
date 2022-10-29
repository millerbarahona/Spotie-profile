import  { ArtistRespone, Playlist, PlaylistsResponse } from "../../models"
import { checkRefresh } from '../'

interface Props {
  time?: string, 
  limit?: number, 
  code: string,
  id?: string
}

export async function getPlaylists(props: Props) {
  const url = `https://api.spotify.com/v1/me/playlists?limit=50`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:PlaylistsResponse = await res.json()
  return body
}

export async function getPlaylist (props: Props) {
  const url = `	https://api.spotify.com/v1/playlists/${props.id}`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:Playlist = await res.json()
  return body
}