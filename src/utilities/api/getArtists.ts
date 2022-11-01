import  { ArtistRespone, Artists } from "../../models"
import { checkRefresh } from '../'

interface Props {
  time?: string, 
  limit?: number, 
  code: string,
  id?: string
}

interface ArtistsRes{
  artists: Artists[]
}

export async function getArtists(props: Props) {
  const url = `https://api.spotify.com/v1/me/top/artists?limit=${props.limit ? props.limit : 50}&time_range=${props.time ? props.time : 'long_term'}`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:ArtistRespone = await res.json()
  return body
}

export async function getArtist (props: Props) {
  const url = `	https://api.spotify.com/v1/artists/${props.id}`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:Artists = await res.json()
  return body
}

export async function getRelatedArtist (props: Props) {
  const url = `	https://api.spotify.com/v1/artists/${props.id}/related-artists`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:ArtistsRes = await res.json()
  return body
}